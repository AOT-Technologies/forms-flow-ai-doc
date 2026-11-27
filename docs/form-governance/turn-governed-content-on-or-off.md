---
title: Turn governed content on or off
sidebar_label: Turn governed content on or off
sidebar_position: 10
description: Turn governed content on so policy owners can build your organization's library of approved form wording, or off to freeze the library.
actions: [governed-content.toggle]
---

# Turn governed content on or off

In formsflow.ai, governed content must be on before your policy owners can create the approved wording, like privacy notices, that goes on your organization's forms. Turning it off freezes the library in the web app so nobody can add, change or retire blocks there.

## Before you start

- Permissions: **Manage › Organization (Billing)** and **Manage › Governed content**. You need both.
- Edition: Go, Professional or Enterprise.
- Self-hosted installs: the deployment must set `ENABLE_FORM_GOVERNANCE=true`. Without it, the **Governed Content** setting doesn't appear.

## Turn governed content on

1. Go to **Manage › Organization**.
2. Find **Governed Content**. The card reads **Governed content is off**.
3. Select the switch on the card.
4. The **Turn on governed content?** dialog opens. If your library already has required blocks, it tells you how many.
5. Select **Turn on**.

Required blocks that already exist don't reach forms that already exist when you turn governed content on. Designers add them from a banner on each unpublished form before publishing. See [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).

## Turn governed content off

1. Go to **Manage › Organization**.
2. Find **Governed Content**. The card reads **Governed content is on**.
3. Select the switch on the card.
4. The **Turn off governed content?** dialog opens.
5. Select **Turn off**.

## Check that it worked

A toast reads **Governed content turned on** or **Governed content turned off**, and the card reads **Governed content is on** or **Governed content is off**.

## What "off" changes

Turning governed content off affects the library under **Manage › Content** only:

- **Create new block** is disabled.
- Blocks can't be edited or retired in the web app.
- The library shows **Governed content is off. Blocks can’t be created, changed or retired.** If the library is empty, it shows **Governed content is off. Turn it on in Organization to start creating blocks.** with a **Go to Organization** button.

Forms aren't affected. While governed content is off:

- New forms built in the form builder still get your required blocks.
- Blocks already on forms stay there, locked.
- The form's **Content** tab still shows, and designers can still add optional blocks.
- Forms missing required content still can't be published from the web app.

Your blocks are kept. Turning governed content back on makes them editable again.

## Things to know

- On multi-tenant installs, governed content is off until you turn it on.
- On single-tenant installs, governed content is on whenever the deployment sets `ENABLE_FORM_GOVERNANCE`. The card reads **Governed content is on**, and turning it off can't be saved.
- The REST API still lets users with **Manage › Governed content** create, edit and retire blocks while governed content is off.

## Next step

[Create a governed content block](./create-a-governed-content-block.md)
