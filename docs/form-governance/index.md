---
title: Form governance
sidebar_label: Overview
sidebar_position: 1
description: How governed content puts approved wording, like privacy and retention notices, on your organization's forms and keeps designers from changing it.
actions: []
---

# Form governance

<span className="badge badge--secondary">Added in 8.4</span>

Forms often need wording that only one team is allowed to write: a privacy notice, a retention statement, a consent clause. When each form designer copies that wording by hand, it drifts, goes out of date, or goes missing, and the process behind the form collects data without the notice your policy requires.

Form governance in formsflow.ai fixes this with governed content. A policy owner writes the approved wording once, as a governed content block. formsflow places required blocks on new forms and locks them, so designers can move a block but can't edit or remove it. Designers add optional blocks where they fit. The forms that start your workflows carry approved wording instead of hand-typed copies.

## How it works

### Governed content blocks

A governed content block is a piece of approved wording stored in your organization's library, under **Manage › Content**. Each block has:

- **Name**: identifies the block in the library. It isn't shown on forms.
- **Heading** (optional): shown to the people filling in the form, above the body.
- **Body**: the approved wording. It can use bold, italic, links, and bulleted or numbered lists.
- **Owner**: who designers contact to request a change.
- **Policy reference** (optional): the policy the wording comes from.
- **Type**: required or optional.

### Required and optional content

- Required content goes on every new form created in the form builder. Designers can't edit, copy or remove it.
- Optional content is available to designers. They switch it on or off for each form from the form's **Content** tab.

### Locked blocks

On a form, a governed block is locked. In the builder it shows a **Governed** strip with its owner and policy reference and the label **Locked**. Designers can drag it to a new position. They can't change its wording.

### Content versions

Each block has a version number that goes up whenever its content changes.

### Retired blocks

When wording is no longer needed, you retire the block. Retiring can't be undone. A retired block stays on each form, including live forms, until that form is next saved; saving the form removes it.

## Who does what

| Role | What they do | Permission |
| --- | --- | --- |
| Administrator | Turns governed content on or off for the organization | **Manage › Organization (Billing)** and **Manage › Governed content** |
| Policy owner | Creates, edits and retires blocks in the library | **Manage › Governed content** |
| Form designer | Positions required blocks and adds optional blocks on forms | **Design › Manage forms & flows you create and that are shared with you** |
| Developer | Reads which blocks a form carries through the REST API | **Design › View forms & flows**, **Design › Manage forms & flows you create and that are shared with you**, or **Manage › Governed content** |

A user can do an action if any of their roles grants the permission.

## What you need

- Edition: Go, Professional or Enterprise.
- Deployment: SaaS or self-hosted. Self-hosted installs need the environment variable `ENABLE_FORM_GOVERNANCE=true`.
- Setting: governed content is off by default. An administrator turns it on under **Manage › Organization › Governed Content**.

## Known limits

- The library doesn't show which forms carry a block.
- The **Manage** menu in the sidebar shows only for users who can manage users, roles or dashboards. If **Manage › Governed content** is your only Manage permission, open the Content page by its address, which ends in `/admin/content`.
- Required content is added when a form is created in the builder. Forms that existed before a required block was created don't get it automatically. Designers add it from an alert on the form before they can publish.
- The lock applies in the builder and when a form is saved. Imported forms aren't checked.
- The form's **Content** tab doesn't list retired blocks. Until the form is saved, the builder shows a retired block like any other governed block.
- On single-tenant installs, the on/off switch shows but its setting can't be saved.

## Next steps

- [Turn governed content on or off](./turn-governed-content-on-or-off.md)
- [Create a governed content block](./create-a-governed-content-block.md)
- [Edit or retire a governed content block](./edit-or-retire-a-block.md)
- [Use governed content on a form](./use-governed-content-on-a-form.md)
- [Add missing required content before publishing](./add-missing-required-content.md)
- [Check a form's governed content through the API](./check-governed-content-through-the-api.md)
