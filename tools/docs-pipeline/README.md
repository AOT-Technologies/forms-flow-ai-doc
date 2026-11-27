# User-guide docs pipeline

Generates formsflow.ai user-guide pages for new features from the product team's **action inventory**: one row per thing a user can do, with its permission, where it is in the UI, its prerequisites, limits and notes.

The pipeline drafts. People decide. Nothing it writes merges without review by Product (accuracy against intended behaviour, clarity, voice) and then a developer (technical correctness).

## Flow

```
action inventory (Google Sheet)
   │  export the Inventory tab as CSV  →  tools/docs-pipeline/input/inventory.csv   (git-ignored)
   ▼
1. extract   deterministic   filter by release + capability, order by prerequisites,
                             strip private fields, write a brief per feature, and
                             generate each feature's reference page and sidebar category
   ▼
2. writer    LLM             Diátaxis pages from the brief: one explanation page (index.md)
                             and task-based how-to pages; every action lands on exactly one page
   ▼
3. verifier  LLM             checks every claim against the brief and the code at the release ref;
                             fixes or removes what it can't support; writes verify-report.md
   ▼
4. editor    LLM             anti-slop style pass; no factual changes
   ▼
5. lint      deterministic   coverage, brand, banned words, internal leakage, beta notice,
                             links, page length
   ▼
6. publish   deterministic   copy into docs/<feature>/ (the unreleased "Next" docs),
                             then `npm run build` and open a PR per feature
   ▼
7. cut       Docusaurus      once the release's features are merged:
                             npm run docusaurus docs:version <version>
```

Only steps 2–4 use a model. Everything a reader could check mechanically (who can do what, where it is, which editions) comes straight from the inventory in the generated reference page.

## Run it

Node 18+. From the site root:

```bash
# 1. extract (all features in config.json, or --feature <key>)
node tools/docs-pipeline/run.mjs extract --inventory tools/docs-pipeline/input/inventory.csv --release 8.4

# 2–4. with the Claude Code CLI installed and signed in:
node tools/docs-pipeline/run.mjs draft --release 8.4 --feature offline-submissions

#      or produce the prompts and run them in any agent:
node tools/docs-pipeline/run.mjs prompt --release 8.4 --feature offline-submissions --stage writer   # then verifier, editor

# 5. lint (exits non-zero on errors)
node tools/docs-pipeline/run.mjs lint --release 8.4

# 6. publish into docs/<feature>/, then build (broken links fail the build)
node tools/docs-pipeline/run.mjs publish --release 8.4 --feature offline-submissions
npm run build
```

Working files go to `tools/docs-pipeline/build/<release>/<feature>/` (git-ignored):

| File | What it is | Published? |
| --- | --- | --- |
| `actions.json` | The feature's inventory rows, ordered, with `source` and `owner` removed | No |
| `brief.md` | What the writer and verifier work from | No |
| `pages/` | The pages: `index.md`, how-to pages, generated `reference.md` and `_category_.json` | Yes |
| `review-notes.md` | Held-back behaviour, open questions, inventory gaps, page map | No: goes in the PR description |
| `verify-report.md` | Every claim checked, with its verdict and basis (brief row or code path) | No: goes in the PR description |
| `lint-report.md` | Lint output | No |

## Inputs

- **Inventory CSV.** Export the *Inventory* tab of "formsflow.ai V8.3+ Docs — Action Inventory". Columns used: `action_id, action, purpose, capability, permissions, surfaces, nav_path, edition, deployment, status, prerequisites, concepts, limitations, notes, existing_doc, release`. `source` and `owner` are dropped at extract. The CSV is git-ignored because it names internal sources; never commit it here.
- **`config.json`.** Releases (inventory release → docs version), features (folder key → inventory capability), the code repos the verifier reads, and lint lists. Pin each code repo's `ref` to a full commit SHA from the AOT-Technologies repo before a run, not a branch name: a branch ref resolves to whatever your local clone last fetched, and a fork's `origin` can be far behind.
- **`glossary.json`.** Plain-language terms from the inventory's *Glossary* tab, keyed by capability. `audience` is `user` for words people see in the app (they go on the generated reference page) or `technical` for infrastructure (the writer uses them only on self-hosted and developer pages).
- **`skills/`.** The writer, verifier and editor instructions. Change these to change the output; don't hand-edit generated pages to work around a skill.

### Prerequisites rule

The inventory lists prerequisites **one step back**: only what you do immediately before an action, not the whole chain. `,` means all of these, `|` means any one, parentheses group, `—` means none. Extract uses this to order actions within a feature; prerequisites in other features are named in the text but not linked until those features are documented.

## Versioning

The pipeline follows the site's standard [Docusaurus versioning](https://docusaurus.io/docs/versioning). `publish` writes only to `docs/`, which is the unreleased "Next" version. Released versions under `versioned_docs/` are snapshots and are never edited by hand or by the pipeline.

To release a version:

1. Add the release to `config.json` (`"8.5": { "version": "8.5.0", "label": "8.5" }`) and any new features. Give each feature a `position` after the existing top-level categories.
2. Run the pipeline for each feature, review, and merge each feature PR into `docs/`.
3. When every feature for the release is merged, cut the version from the site root: `npm run docusaurus docs:version 8.5.0`. This snapshots all of `docs/` into `versioned_docs/version-8.5.0/`, adds its sidebar, and lists it first in `versions.json`, which makes it the default version.

## What lint enforces

- Every inventory action for the feature appears in exactly one page's `actions` front matter.
- First product mention on a page is `formsflow.ai`; no `FormsFlow` / `Formsflow`.
- No banned words, and no internal markers: Confluence, Figma, Jira keys, "code sweep", "live test pending", private repo paths, `[NEED`, TODO, TBD.
- Beta features carry the `:::info Beta` notice on every page.
- No tabs or collapsibles (agents can't read them reliably); how-to pages have "Before you start" and numbered steps; pages stay under the word limit.
- Relative links resolve.

## Not in scope yet

- Running on pull requests in the code repos (the end goal: a docs PR per merged feature). This version runs per release, by hand.
- Screenshots.
- Developer, API and installation docs. Those stay with engineering.
