#!/usr/bin/env node
// formsflow.ai user-guide docs pipeline.
//
//   extract  inventory CSV  -> build/<release>/<feature>/{actions.json, brief.md, pages/reference.md}
//   prompt   brief + skill  -> build/<release>/<feature>/<stage>-prompt.md   (stage: writer | verifier | editor)
//   draft    runs writer -> verifier -> editor through `claude -p` (needs the Claude Code CLI)
//   lint     deterministic checks on build/<release>/<feature>/pages
//   publish  copies pages into the versioned docs instance and registers the version
//
// See README.md for the full flow and the review rules.

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseCsvObjects } from './lib/csv.mjs';
import { orderActions, prereqIds, describePrereqs } from './lib/prereq.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(HERE, '../..');
const config = JSON.parse(fs.readFileSync(path.join(HERE, 'config.json'), 'utf8'));
const glossary = JSON.parse(fs.readFileSync(path.join(HERE, 'glossary.json'), 'utf8'));

// ---------- args ----------
const [cmd, ...rest] = process.argv.slice(2);
const args = {};
for (let i = 0; i < rest.length; i++) {
  if (rest[i].startsWith('--')) {
    const k = rest[i].slice(2);
    args[k] = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
  }
}
const release = String(args.release ?? Object.keys(config.releases)[0]);
const rel = config.releases[release];
if (!rel) die(`Unknown release ${release}. Add it to config.json "releases".`);
const features = args.feature ? config.features.filter((f) => f.key === args.feature) : config.features;
if (!features.length) die(`Unknown feature ${args.feature}. Known: ${config.features.map((f) => f.key).join(', ')}`);

const buildDir = (f) => path.join(HERE, 'build', release, f.key);
const pagesDir = (f) => path.join(buildDir(f), 'pages');

// ---------- helpers ----------
function die(msg) { console.error(`error: ${msg}`); process.exit(1); }
function write(file, text) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); }
function mdx(s) { return String(s ?? '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/\|/g, '\\|'); }
function isUnverified(row) { return /live test pending|code reading|unverified|not yet confirmed/i.test(`${row.limitations} ${row.notes}`); }

const SURFACE_LABEL = { UI: 'formsflow.ai web app', API: 'REST API', MCP: 'MCP connector', 'config/CLI': 'Deployment configuration', Redash: 'Analytics (Redash)' };
function surfacesOf(row) { return row.surfaces.split(',').map((s) => s.trim()).filter(Boolean); }
function permissionLabel(p) {
  if (/^n\/a \(infrastructure access\)$/i.test(p)) return 'Server access to your installation (self-hosted)';
  return p;
}

// Rows that must never reach a public page: where the fact came from, who owns it.
const PRIVATE_FIELDS = ['source', 'owner'];

// ---------- extract ----------
async function extract() {
  const file = args.inventory;
  if (!file) die('--inventory <csv export of the Inventory sheet> is required');
  const rows = parseCsvObjects(fs.readFileSync(file, 'utf8'));
  const required = ['action_id', 'action', 'capability', 'permissions', 'surfaces', 'status', 'prerequisites', 'release'];
  const missingCols = required.filter((c) => !(c in rows[0]));
  if (missingCols.length) die(`inventory is missing columns: ${missingCols.join(', ')}`);

  const label = new Map(rows.map((r) => [r.action_id, r.action]));
  const capOf = new Map(rows.map((r) => [r.action_id, r.capability]));

  for (const f of features) {
    const mine = rows.filter((r) => r.capability === f.capability && r.release === release);
    if (!mine.length) { console.warn(`! ${f.key}: no rows for capability=${f.capability} release=${release}`); continue; }
    const ordered = orderActions(mine);

    const problems = [];
    for (const r of ordered) {
      for (const c of required) if (!r[c]) problems.push(`${r.action_id}: empty ${c}`);
      if (surfacesOf(r).includes('UI') && !r.nav_path) problems.push(`${r.action_id}: UI action with no nav_path`);
      for (const p of prereqIds(r.prerequisites)) if (!label.has(p)) problems.push(`${r.action_id}: prerequisite ${p} is not in the inventory`);
    }

    const actions = ordered.map((r) => {
      const clean = Object.fromEntries(Object.entries(r).filter(([k]) => !PRIVATE_FIELDS.includes(k)));
      const prereqs = prereqIds(r.prerequisites);
      return {
        ...clean,
        prerequisites_in_feature: prereqs.filter((p) => capOf.get(p) === f.capability),
        prerequisites_elsewhere: prereqs.filter((p) => capOf.get(p) !== f.capability).map((p) => ({ id: p, action: label.get(p) ?? p, capability: capOf.get(p) ?? 'unknown' })),
        prerequisites_text: describePrereqs(r.prerequisites, (id) => `"${label.get(id) ?? id}"`),
        unverified: isUnverified(r),
      };
    });

    const dir = buildDir(f);
    fs.rmSync(dir, { recursive: true, force: true });
    write(path.join(dir, 'actions.json'), JSON.stringify(actions, null, 2));
    write(path.join(dir, 'brief.md'), brief(f, actions, problems));
    write(path.join(pagesDir(f), 'reference.md'), referencePage(f, actions));
    write(path.join(pagesDir(f), '_category_.json'), JSON.stringify({ label: f.title, position: f.position, link: { type: 'doc', id: `${f.key}/index` } }, null, 2) + '\n');
    console.log(`✓ ${f.key}: ${actions.length} actions, ${actions.filter((a) => a.unverified).length} with unverified behaviour, ${problems.length} data problems -> ${path.relative(SITE, dir)}`);
    problems.forEach((p) => console.log(`    - ${p}`));
  }
}

function brief(f, actions, problems) {
  const terms = glossary.filter((g) => g.capability === f.capability);
  const statuses = [...new Set(actions.map((a) => a.status))];
  const lines = [
    `# Brief: ${f.title} (formsflow.ai ${rel.label})`,
    '',
    `Feature key: \`${f.key}\` · inventory capability: \`${f.capability}\` · release ${release} · docs version ${rel.version}`,
    `Status in inventory: ${statuses.join(', ')}${statuses.includes('beta') ? ' → every page carries the beta notice' : ''}`,
    `Output folder: \`${path.relative(SITE, pagesDir(f)).replace(/\\/g, '/')}\` (reference.md and _category_.json are generated; don't edit them)`,
    '',
    '## Actions, in prerequisite order',
    '',
    'Order follows the inventory\'s one-step-back prerequisites. Each action must land in exactly one how-to page\'s `actions` front matter.',
    '',
  ];
  for (const a of actions) {
    lines.push(`### ${a.action_id}: ${a.action}${a.unverified ? '  ⚠ contains unverified behaviour' : ''}`);
    const fields = ['purpose', 'permissions', 'surfaces', 'nav_path', 'edition', 'deployment', 'status', 'concepts', 'limitations', 'notes', 'existing_doc'];
    for (const k of fields) if (a[k]) lines.push(`- **${k}:** ${a[k]}`);
    lines.push(`- **before this:** ${a.prerequisites_text}`);
    if (a.prerequisites_elsewhere.length) lines.push(`- **prerequisites outside this feature (not documented in this version yet; name them, don't link):** ${a.prerequisites_elsewhere.map((p) => `${p.action} (${p.capability})`).join('; ')}`);
    lines.push('');
  }
  if (terms.length) {
    lines.push('## Glossary for this feature', '');
    for (const t of terms) lines.push(`- **${t.term}:** ${t.explanation} _(also called: ${t.alsoCalled})_`);
    lines.push('');
  }
  lines.push('## Code to verify against', '', 'Read-only. Use `git -C <repo> grep <pattern> <ref>` and `git -C <repo> show <ref>:<path>`; these are the refs the release is built from.', '');
  for (const r of config.codeRepos) lines.push(`- \`../${r.name}\` @ \`${r.ref}\`${r.public ? '' : ' (private: never link to it or quote paths from it in a page)'}`);
  lines.push('');
  if (problems.length) {
    lines.push('## Inventory data problems (report these, don\'t paper over them)', '', ...problems.map((p) => `- ${p}`), '');
  }
  return lines.join('\n');
}

function referencePage(f, actions) {
  const beta = actions.some((a) => a.status === 'beta');
  const editions = [...new Set(actions.flatMap((a) => a.edition.split(',').map((s) => s.trim()).filter(Boolean)))];
  const selfHostedOnly = actions.filter((a) => a.deployment === 'Self-hosted');
  const terms = glossary.filter((g) => g.capability === f.capability);
  const out = [
    '---',
    `title: "${f.title}: reference"`,
    'sidebar_label: Reference',
    'sidebar_position: 90',
    `description: "Every ${f.title.toLowerCase()} action in formsflow.ai ${rel.label}: the permission it needs, where to find it, and which editions include it."`,
    'generated: true',
    '---',
    '',
    `# ${f.title}: reference`,
    '',
  ];
  if (beta) out.push(':::info Beta', `${f.title} is in beta in formsflow.ai ${rel.label}. Behaviour may change in a later release.`, ':::', '');
  out.push(
    `This page lists every ${f.title.toLowerCase()} action in formsflow.ai ${rel.label}, the permission each one needs, and where to find it.`,
    '',
    '## Availability',
    '',
    `- **Editions:** ${editions.join(', ') || 'not stated'}`,
    `- **Deployment:** SaaS and self-hosted${selfHostedOnly.length ? `. Self-hosted only: ${selfHostedOnly.map((a) => a.action.toLowerCase()).join('; ')}` : ''}`,
    '',
    '## Actions and permissions',
    '',
    'Permissions are named as they appear on the role editor in **Manage › Roles**. A user can do an action if any of their roles grants the permission.',
    '',
    '| What you want to do | Permission needed | Where to find it | Available through |',
    '| --- | --- | --- | --- |',
  );
  for (const a of actions) {
    const where = a.nav_path ? mdx(a.nav_path) : '—';
    const through = surfacesOf(a).map((s) => SURFACE_LABEL[s] ?? s).join(', ');
    out.push(`| ${mdx(a.action)} | ${mdx(permissionLabel(a.permissions))} | ${where} | ${mdx(through)} |`);
  }
  out.push('');
  if (terms.length) {
    out.push('## Terms', '');
    for (const t of terms) out.push(`**${t.term}**`, `: ${mdx(t.explanation)}`, '');
  }
  return out.join('\n');
}

// ---------- prompt ----------
function promptFor(f, stage) {
  const skill = fs.readFileSync(path.join(HERE, 'skills', `${stage}.md`), 'utf8');
  const b = fs.readFileSync(path.join(buildDir(f), 'brief.md'), 'utf8');
  const out = path.relative(SITE, pagesDir(f)).replace(/\\/g, '/');
  const notes = path.relative(SITE, path.join(buildDir(f), 'review-notes.md')).replace(/\\/g, '/');
  return [
    skill,
    '',
    '---',
    '',
    `Working directory: the docs site root. Write pages to \`${out}/\`. Write review notes to \`${notes}\`.`,
    `Docs version: ${rel.version} (label ${rel.label}). Docs instance route: /${config.instance.routeBasePath}/.`,
    '',
    b,
  ].join('\n');
}

async function prompt() {
  const stage = args.stage ?? 'writer';
  for (const f of features) {
    if (!fs.existsSync(path.join(buildDir(f), 'brief.md'))) die(`${f.key}: run extract first`);
    const file = path.join(buildDir(f), `${stage}-prompt.md`);
    write(file, promptFor(f, stage));
    console.log(`✓ ${f.key}: ${path.relative(SITE, file)}`);
  }
}

// ---------- draft (headless Claude Code) ----------
async function draft() {
  const stages = ['writer', 'verifier', 'editor'];
  const tools = 'Read,Glob,Grep,Write,Edit,Bash(git -C *),Bash(git grep *),Bash(git show *)';
  for (const f of features) {
    for (const stage of stages) {
      console.log(`→ ${f.key}: ${stage}`);
      const r = spawnSync('claude', ['-p', '--allowedTools', tools, '--permission-mode', 'acceptEdits'], {
        cwd: SITE, input: promptFor(f, stage), encoding: 'utf8', shell: process.platform === 'win32', maxBuffer: 64 * 1024 * 1024,
      });
      if (r.error || r.status !== 0) die(`${f.key} ${stage} failed: ${r.error?.message ?? r.stderr}`);
      write(path.join(buildDir(f), `${stage}-log.md`), r.stdout);
    }
  }
  console.log('Drafts written. Run lint next, then read review-notes.md and verify-report.md before publishing.');
}

// ---------- lint ----------
function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return [null, text];
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('[') && v.endsWith(']')) v = v.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    else v = v.replace(/^["']|["']$/g, '');
    fm[kv[1]] = v;
  }
  return [fm, text.slice(m[0].length)];
}

function lintFeature(f, dir) {
  const errors = [];
  const warnings = [];
  const actions = JSON.parse(fs.readFileSync(path.join(buildDir(f), 'actions.json'), 'utf8'));
  const ids = new Set(actions.map((a) => a.action_id));
  const beta = actions.some((a) => a.status === 'beta');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((n) => /\.mdx?$/.test(n)) : [];
  if (!files.includes('index.md')) errors.push('index.md (feature overview) is missing');

  const covered = new Map();
  for (const name of files) {
    const text = fs.readFileSync(path.join(dir, name), 'utf8');
    const [fm, body] = frontmatter(text);
    const where = `${f.key}/${name}`;
    if (!fm) { errors.push(`${where}: no front matter`); continue; }
    for (const k of ['title', 'description', 'sidebar_position']) if (!fm[k]) errors.push(`${where}: front matter needs ${k}`);
    if (fm.description && fm.description.length > 200) warnings.push(`${where}: description over 200 characters`);

    const acts = Array.isArray(fm.actions) ? fm.actions : fm.actions ? [fm.actions] : [];
    for (const a of acts) {
      if (!ids.has(a)) errors.push(`${where}: actions lists ${a}, which isn't a ${f.capability} action in release ${release}`);
      if (covered.has(a)) errors.push(`${where}: ${a} is already covered by ${covered.get(a)}`);
      covered.set(a, name);
    }

    // Brand: first mention must be formsflow.ai; never capitalised variants.
    const prose = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
    const first = prose.match(/formsflow(\.ai)?/i);
    if (first && first[0] !== 'formsflow.ai') errors.push(`${where}: first product mention is "${first[0]}", must be "formsflow.ai"`);
    for (const m of prose.matchAll(/\b(FormsFlow|Formsflow|FORMSFLOW)\b/g)) errors.push(`${where}: brand variant "${m[0]}"`);

    for (const w of config.lint.bannedWords) if (new RegExp(`\\b${w}\\b`, 'i').test(prose)) errors.push(`${where}: banned word "${w}"`);
    for (const p of config.lint.internalPatterns) {
      const m = body.match(new RegExp(p, 'i'));
      if (m) errors.push(`${where}: internal or unfinished marker "${m[0]}" must not ship`);
    }
    if (/<Tabs|<details/i.test(body)) errors.push(`${where}: tabs/collapsibles hide content from agents; use headings`);
    if (/—/.test(prose.replace(/^\|.*\|$/gm, ''))) warnings.push(`${where}: em dashes in prose (editor pass should remove most)`);
    if (beta && !/:::(info|caution|warning|note)\s+Beta/i.test(body)) errors.push(`${where}: feature is beta; page needs the ":::info Beta" notice`);

    const isHowTo = acts.length && name !== 'index.md' && !fm.generated;
    if (isHowTo) {
      if (!/^##\s+Before you start/m.test(body)) warnings.push(`${where}: how-to without a "Before you start" section`);
      if (!/^\d+\.\s/m.test(body)) warnings.push(`${where}: how-to with no numbered steps`);
    }
    const words = prose.split(/\s+/).filter(Boolean).length;
    if (words > config.lint.maxWordsPerPage) warnings.push(`${where}: ${words} words (over ${config.lint.maxWordsPerPage}); agents truncate long pages`);

    // Relative links must resolve inside the version folder.
    for (const m of body.matchAll(/\]\((\.{1,2}\/[^)#\s]+)/g)) {
      const target = path.resolve(dir, m[1]);
      const cands = [target, `${target}.md`, `${target}.mdx`, path.join(target, 'index.md')];
      if (!cands.some((c) => fs.existsSync(c))) errors.push(`${where}: broken link ${m[1]}`);
    }
  }
  for (const id of ids) if (!covered.has(id)) errors.push(`${f.key}: action ${id} isn't covered by any page's actions front matter`);
  return { errors, warnings };
}

async function lint() {
  let failed = false;
  for (const f of features) {
    const dir = args.dir ? path.resolve(args.dir, f.key) : pagesDir(f);
    const { errors, warnings } = lintFeature(f, dir);
    const report = [`# Lint: ${f.key} (${release})`, '', `Errors: ${errors.length} · Warnings: ${warnings.length}`, '', ...errors.map((e) => `- ✗ ${e}`), ...warnings.map((w) => `- ⚠ ${w}`), ''].join('\n');
    write(path.join(buildDir(f), 'lint-report.md'), report);
    console.log(`${errors.length ? '✗' : '✓'} ${f.key}: ${errors.length} errors, ${warnings.length} warnings`);
    errors.forEach((e) => console.log(`    ✗ ${e}`));
    warnings.forEach((w) => console.log(`    ⚠ ${w}`));
    if (errors.length) failed = true;
  }
  if (failed) process.exit(1);
}

// ---------- publish ----------
async function publish() {
  const { versionsFile, versionedDocsDir, versionedSidebarsDir, sidebarId } = config.instance;
  const versionRoot = path.join(SITE, versionedDocsDir, `version-${rel.version}`);
  for (const f of features) {
    const { errors } = lintFeature(f, pagesDir(f));
    if (errors.length && !args.force) die(`${f.key}: lint has ${errors.length} errors; fix them or pass --force`);
    const dest = path.join(versionRoot, f.key);
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(pagesDir(f), dest, { recursive: true });
    console.log(`✓ ${f.key} -> ${path.relative(SITE, dest)}`);
  }
  const vf = path.join(SITE, versionsFile);
  const versions = fs.existsSync(vf) ? JSON.parse(fs.readFileSync(vf, 'utf8')) : [];
  if (!versions.includes(rel.version)) {
    versions.unshift(rel.version);
    write(vf, JSON.stringify(versions, null, 2) + '\n');
    console.log(`✓ registered ${rel.version} in ${versionsFile}`);
  }
  const sb = path.join(SITE, versionedSidebarsDir, `version-${rel.version}-sidebars.json`);
  if (!fs.existsSync(sb)) write(sb, JSON.stringify({ [sidebarId]: [{ type: 'autogenerated', dirName: '.' }] }, null, 2) + '\n');
  console.log('Next: npm run build (broken links fail the build), then open the PR.');
}

// ---------- dispatch (last, so every const above is initialised) ----------
const commands = { extract, prompt, draft, lint, publish };
if (!commands[cmd]) {
  console.log('usage: node tools/docs-pipeline/run.mjs <extract|prompt|draft|lint|publish> [--release 8.4] [--feature key] [--inventory file.csv] [--stage writer]');
  process.exit(cmd ? 1 : 0);
}
await commands[cmd]();
