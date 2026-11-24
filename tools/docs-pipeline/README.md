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
6. publish   deterministic   copy into docs/<feature>/ (the v8 set), label each page
                             "Added in <release>", then `npm run build` and open a PR per feature
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
- **`config.json`.** Releases (inventory release → docs version), features (folder key → inventory capability), the code repos the verifier reads, and lint lists.
- **`glossary.json`.** Plain-language terms from the inventory's *Glossary* tab, keyed by capability.
- **`skills/`.** The writer, verifier and editor instructions. Change these to change the output; don't hand-edit generated pages to work around a skill.

### Prerequisites rule

The inventory lists prerequisites **one step back**: only what you do immediately before an action, not the whole chain. `,` means all of these, `|` means any one, parentheses group, `—` means none. Extract uses this to order actions within a feature; prerequisites in other features are named in the text but not linked until those features are documented.

## Versioning

`docs/` is the **v8 documentation set**: the default version, labelled **8.x**, served at the site root. It contains only pages written for v8. The v7 and v6 docs stay frozen in `versioned_docs/version-7.0.0/` and `version-6.0.2/`, and their old root links redirect to `/7.0.0/...`.

v8 is **not** copied per minor release. Instead, each feature in `config.json` has an `addedIn` release, and `publish` puts an "Added in <release>" label under every page's heading. Don't run `docs:version` for 8.x minor releases.

To document a new release's features:

1. Add the release to `config.json` (`"8.5": { "version": "8.5.0", "label": "8.5" }`) and each new feature with `"addedIn": "8.5"` and a `position` after the existing categories.
2. Run the pipeline for each feature, review, and merge each feature PR.
3. When a feature changes in a later release, regenerate it with the new release. Keep its `addedIn`, and describe the change on the page.

Freeze v8 with `npm run docusaurus docs:version 8.x` only when v9 documentation starts, or if a specific 8.x release needs its own frozen docs.

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
