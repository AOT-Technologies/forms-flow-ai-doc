# Skill: write a feature's user-guide pages

You write the formsflow.ai user guide for one feature from a brief. The brief is generated from the product team's action inventory: one row per thing a user can do, with its permission, where it lives in the UI, its prerequisites, limits and notes. **The brief is your source of truth.** The code repos listed in the brief are there to confirm wording (button labels, messages) and fill small gaps, not to add features the brief doesn't list.

## Readers

1. **People doing the work:** form designers, business analysts, administrators, and the people who fill in forms. They want to finish a task.
2. **Agents:** AI assistants read these pages and follow them as instructions. Write so the raw text answers the question even with the page layout stripped away.

## Page plan (Diátaxis)

Write these files in the output folder. `reference.md` and `_category_.json` are generated already: don't touch them.

| File | Diátaxis type | What goes in it |
| --- | --- | --- |
| `index.md` | Explanation | The problem this feature solves and the outcome, then how it works (the concepts), who does what (roles), what you need (edition, deployment, settings), and known limits. End with "## Next steps" linking each how-to page. `sidebar_position: 1`. |
| `<task-slug>.md` (several) | How-to | One goal per page, for one kind of reader. Group the brief's actions so each page is a task someone sets out to do (for example, "Make a form available offline" or "Set your organization's colours and logo"). `sidebar_position` from 10 upward, in prerequisite order. |

Rules for grouping:

- Every action in the brief goes in exactly one how-to page's `actions` front matter. The lint step fails otherwise.
- Keep the brief's prerequisite order. If action B needs action A, A's page comes first or A comes first on the same page.
- Split by reader: an administrator's setup, a designer's task and a respondent's task go on different pages. Actions whose only surface is API or config/CLI go on a developer or self-hosted administrator page.
- Aim for 3–7 how-to pages per feature. One action can be its own page if it's a real task on its own.

## Front matter

```yaml
---
title: Make a form available offline
sidebar_label: Make a form available offline
sidebar_position: 10
description: One sentence, under 200 characters, that says what the reader will have done.
actions: [offline.enable-form, offline.take-form-offline]
---
```

Use the flow-style list for `actions` exactly as shown. `index.md` uses `actions: []`.

## How-to page shape

```markdown
# <Title: verb + object, in the user's words>

:::info Beta            <- only if the brief says the feature is beta
<Feature> is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

<One or two sentences: what you'll have when you're done, and why it matters to the process.>

## Before you start

- Permission: **<permission, exactly as the brief names it>**
- <prerequisite actions, as plain links to the page that covers them when it's in this feature; as plain text otherwise>
- <edition / deployment / setting the reader needs, if any>

## <Task heading per action, in the user's words>

1. Go to **<nav path from the brief>**.
2. Select **<exact label, confirmed in the code>**.
3. ...

## Check that it worked

<What the reader sees when it worked: the exact label, badge or message.>

## Things to know

- <limits from the brief that affect this task, written as plain facts>
```

## Writing rules

- **formsflow.ai** is the first product mention on every page, all lowercase with `.ai`. After that, "formsflow" is fine. Never "FormsFlow" or "Formsflow".
- Lead with the problem and the outcome, not the button. Connect forms to workflows where the feature does (for example: an offline submission starts the form's workflow when it syncs).
- Second person, present tense, active voice. Short sentences. Plain words.
- Bold exact UI labels: **Save**, **Manage › Content**. Use `›` for paths, matching the brief's nav paths. Quote messages exactly as the brief or code has them.
- Numbered steps for anything done in order; one action per step.
- Use headings for structure. No tabs, collapsible sections or content hidden behind clicks. Each section should make sense if an agent pulls it out on its own.
- Name permissions exactly as the brief does. A user has an action if any of their roles grants that permission.
- Don't use: delve, landscape, synergy, leverage, robust, streamline, cutting-edge, seamless, empower, unlock, effortless. No hype, no "simply", no "just".
- MDX: escape `<` and `{` in prose (write `&lt;form&gt;` or put the text in backticks). Paths like `Build › Forms › <form>` go in prose as **Build › Forms ›** *your form*.

## What never goes on a page

These pages are public. Keep all of this out of them:

- Where a fact came from: Confluence, Figma, Jira keys (FWF-…), "code sweep", the inventory, people's names.
- Links to or file paths from private repositories. Don't link to source code at all.
- Behaviour the brief marks as **"Code reading, live test pending"**, **unverified**, or that contradicts the UI's own wording. Don't state it as fact and don't guess. Leave it off the page and record it in the review notes.
- `[NEED: …]`, TODO, TBD, or questions to the reviewer. Those go in the review notes.
- Prices, plan limits or roadmap promises the brief doesn't state.

## Review notes

Write `review-notes.md` next to the pages folder (path given below). It's for the human reviewers and goes in the pull request, not on the site. Include:

1. **Held back:** each unverified or contradictory behaviour you left off a page, with the action ID and why.
2. **Questions:** anything you couldn't settle from the brief or the code.
3. **Inventory problems:** data gaps the brief listed, plus any you found.
4. **Page map:** a table of page → actions covered.

Keep it short and specific.
