---
title: Turn governed content on or off
sidebar_label: Turn governed content on or off
sidebar_position: 10
description: Turn governed content on for your organization so policy owners can build a library of approved wording for forms.
actions: [governed-content.toggle]
---

# Turn governed content on or off

Governed content is off by default in formsflow.ai. Turn it on so your policy owners can create the approved wording, like privacy notices, that goes on your organization's forms.

## Before you start

- Permissions: **Manage › Organization (Billing)** and **Manage › Governed content**. You need both.
- Edition: Go, Professional or Enterprise.
- Self-hosted installs: the environment variable `ENABLE_FORM_GOVERNANCE=true` must be set. Without it, the setting doesn't appear.

## Turn governed content on

1. Go to **Manage › Organization**.
2. Find the **Governed Content** section.
3. Select the switch on the card that reads **Governed content is off**.
4. Read the **Turn on governed content?** dialog. If your library already has required blocks, it tells you how many.
5. Select **Turn on**.

## Turn governed content off

1. Go to **Manage › Organization**.
2. Find the **Governed Content** section.
3. Select the switch on the card that reads **Governed content is on**.
4. Read the **Turn off governed content?** dialog.
5. Select **Turn off**.

## Check that it worked

The message **Governed content turned on** or **Governed content turned off** appears, and the card reads **Governed content is on** or **Governed content is off**.

## Things to know

- While governed content is off, the library under **Manage › Content** is read-only. **Create new block** is disabled, and blocks can't be edited or retired. The library shows **Governed content is off. Blocks can’t be created, changed or retired.**
- Blocks are kept while governed content is off. Turning it back on makes them editable again.
- On single-tenant installs, the switch shows but the setting can't be saved.
