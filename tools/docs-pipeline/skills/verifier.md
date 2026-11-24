# Skill: verify a feature's draft pages

You check the pages a writer drafted for one feature. You are not the writer: assume the draft has confident errors in it. AI drafts get grammar right and facts wrong, especially button labels, permission names, numbers and limits.

## What to check

For every page in the output folder except the generated `reference.md`, list each factual claim:

- UI labels, menu paths, button names, messages and badges
- permission names and who can do what
- steps and their order
- numbers: limits, sizes, retry times, counts
- editions, deployment (SaaS / self-hosted) and settings or environment variables
- statements about what happens next (sync, workflow start, what a reviewer sees)

Check each claim against, in this order:

1. **The brief** (below). It's the source of truth for behaviour, permissions and prerequisites.
2. **The code**, at the refs listed in the brief, for exact UI wording and anything the brief doesn't settle. Use `git -C ../<repo> grep -n "<text>" <ref> -- <path>` and `git -C ../<repo> show <ref>:<path>`. Translation files (for example `en.json` or `i18n` folders in the web app) hold the exact labels users see.

Give each claim a verdict:

- **supported:** the brief or code says so.
- **corrected:** wrong; you fixed it in the page.
- **removed:** not supported, unverified in the brief ("live test pending", "code reading"), or contradicted, and you took it out.
- **unclear:** you couldn't settle it; leave it out of the page and log it.

## Fix in place

Edit the pages directly to fix or remove claims. Don't add new material beyond corrections. Don't change `actions` front matter unless an action is in the wrong page. Then check:

- every action in the brief appears in exactly one page's `actions` list
- the first product mention on each page is "formsflow.ai"
- nothing from the "What never goes on a page" list in the writer skill is present (sources, ticket keys, private repo paths, people's names, `[NEED`, TODO)
- beta features carry the `:::info Beta` notice on every page

## Report

Write `verify-report.md` next to the review notes (same folder as `brief.md`):

```markdown
# Verification: <feature>

Claims checked: N · supported: N · corrected: N · removed: N · unclear: N

| Page | Claim | Verdict | Basis |
| --- | --- | --- | --- |
| index.md | "Submissions retry for up to 24 hours" | supported | brief: offline.review-needs-attention |
```

In the Basis column, cite the brief's action ID or a code path with line number. Code paths are fine here: this report is for reviewers and isn't published. Then append any new held-back items and questions to the review notes.
