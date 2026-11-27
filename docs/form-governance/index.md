---
title: Form governance
sidebar_label: Overview
sidebar_position: 1
description: How governed content puts approved wording, like privacy and consent notices, on your organization's forms and stops designers from changing it.
actions: []
---

# Form governance

Some wording on a form belongs to one team: a privacy notice, a records retention statement, a consent clause. When each form designer types or pastes that wording by hand, it drifts from the approved version or goes missing, and the workflow behind the form collects data without the notice your policy requires.

Form governance in formsflow.ai keeps that wording in one place. A policy owner writes it once, as a governed content block, in your organization's library.

Required blocks go onto every new form built in the form builder, locked so designers can move them but can't change or delete them. Optional blocks are there for designers to add where they fit. The forms that start your workflows carry the approved wording, not a hand-typed copy.

## How it works

### Governed content blocks

A governed content block is a piece of approved wording stored in the library under **Manage › Content**. Each block has:

- **Name**: identifies the block in the library. It isn't shown on forms.
- **Heading** (optional): shown to the people filling in the form, above the body.
- **Body**: the approved wording. It can use bold, italic, links, and bulleted or numbered lists.
- **Owner**: who designers contact to request a change.
- **Policy reference** (optional): the policy the wording comes from.
- **Type**: required or optional.

### Required and optional content

- Required content is added to each new form when it's created in the form builder: from scratch, with AI, or from a template. Designers can't edit, copy or remove it.
- Optional content is offered to designers on each form's **Content** tab. They switch a block on to add it to the form, or off to take it away.

### Locked blocks

On a form, a governed block is locked. In the builder it carries a strip that reads **Governed**, names its owner and policy reference, and shows **Locked**. Designers can drag it to a new position. Nobody can change its wording in the builder, whatever their role.

### Each form keeps its own copy

When a block is added to a form, the form gets a copy of the block's wording at that moment. Editing the block in the library later doesn't change forms that already carry it. A form gets the new wording only when the block is added to it again: on a new form, when a designer adds missing required content, or when a designer switches an optional block off, saves the form, and switches the block back on.

### Content versions

Each block has a version number that goes up when its heading, body, owner or policy reference changes. Changing only the name or type doesn't change the version. The web app doesn't show the version; the REST API reports it, along with whether a form's copy is out of date.

### Retired blocks

When wording is no longer needed, a policy owner retires the block. Retiring can't be undone. The block stays in the library, marked **Retired**, and stays on each form that carries it until that form is next saved.

### Turning governed content on and off

An administrator turns governed content on or off for the organization. The switch controls the library only: while it's off, nobody can create, edit or retire blocks in the web app.

Forms keep working with the blocks you already have. New forms still get required content, the form's **Content** tab still shows, and forms missing required content still can't be published from the web app.

## Who does what

| Role | What they do | Permission |
| --- | --- | --- |
| Administrator | Turns governed content on or off for the organization | **Manage › Organization (Billing)** and **Manage › Governed content** (both) |
| Policy owner | Creates, edits and retires blocks in the library | **Manage › Governed content** |
| Form designer | Positions required blocks, adds optional blocks, and adds missing required content before publishing | **Design › Manage forms & flows you create and that are shared with you** |
| Developer | Reads which blocks a form carries through the REST API | Any one of **Design › View forms & flows**, **Design › Manage forms & flows you create and that are shared with you**, or **Manage › Governed content** |

A user can do an action if any of their roles grants the permission it needs.

## What you need

- Edition: Go, Professional or Enterprise.
- Deployment: SaaS or self-hosted. On self-hosted installs, the library and the Organization setting appear only when the deployment sets `ENABLE_FORM_GOVERNANCE=true`. The form builder and the REST API work the same with or without it.
- Setting: on multi-tenant installs, governed content is off until an administrator turns it on under **Manage › Organization › Governed Content**. On single-tenant installs, it's on whenever the deployment enables form governance.

## Known limits

- The library doesn't show which forms carry a block.
- The **Manage** menu in the sidebar shows only for users who can manage users, roles or dashboards. If **Manage › Governed content** is your only Manage permission, open the library by its address: `/admin/content`, or `/tenant/<tenantKey>/admin/content` on multi-tenant installs.
- Importing a form with **Upload an existing form** doesn't add required content, and imported forms aren't checked for changes to governed blocks.
- A new required block doesn't reach forms that already exist. Designers add it from a banner on each unpublished form before they can publish it. Published forms don't get it until someone unpublishes them.
- A published form can't be saved, so a retired block stays on it until someone unpublishes and saves the form.
- The publish check runs in the web app only. Publishing through the REST API doesn't check for required content.

## Next steps

- [Turn governed content on or off](./turn-governed-content-on-or-off.md)
- [Create a governed content block](./create-a-governed-content-block.md)
- [Change a block's wording](./change-a-blocks-wording.md)
- [Retire a governed content block](./retire-a-block.md)
- [Place required content on a new form](./place-required-content-on-a-new-form.md)
- [Add or remove optional content on a form](./add-or-remove-optional-content.md)
- [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md)
- [Check a form's governed content through the API](./check-governed-content-through-the-api.md)
