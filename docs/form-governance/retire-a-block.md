---
title: Retire a governed content block
sidebar_label: Retire a block
sidebar_position: 40
description: Retire governed content your organization no longer needs, so it comes off forms when they're next saved, and view a retired block.
actions: [governed-content.retire-block, governed-content.view-retired-block]
---

# Retire a governed content block

When your organization no longer needs a piece of approved wording, retire its block in formsflow.ai. It stops going on new forms and comes off each existing form the next time that form is saved.

## Before you start

- Permission: **Manage › Governed content**
- The block exists. See [Create a governed content block](./create-a-governed-content-block.md).
- Governed content is on for your organization. While it's off, blocks can't be retired.

## Retire a block

1. Go to **Manage › Content**.
2. Find the block. Open the **▾** menu next to its **Edit** button and select **Retire**. Or select **Edit** and then **Retire block**.
3. The **Retire this block?** dialog opens. Select **Retire**.

:::warning
Retiring can't be undone. A retired block can't be restored or edited. If you retire a block by mistake, create a new block with the same wording; the retired block's name is free to reuse. Existing forms don't get the new block automatically.
:::

## Check that it worked

A toast reads **Block retired successfully**. The block stays in the library with a **Retired** chip and moves to the end of the list.

## What happens to forms that carry it

- New forms don't get the block, and it no longer appears on the form's **Content** tab.
- The block stays on each form that carries it, including live forms, until that form is next saved. Saving the form removes it.
- A published form can't be saved, so the block stays on it until a designer unpublishes and saves the form. See [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).
- formsflow doesn't list which forms still carry a retired block.

## View a retired block

1. Go to **Manage › Content**.
2. Find the retired block and select **View**.

The **View block** page shows the block's name, heading, body, owner, policy reference and type, with a **Retired** chip and a notice that starts **Retired on** followed by the date it was retired. The page is read-only and has no actions.

## Things to know

- After you retire a block, its name is free to use for a new block.
- The **View block** page doesn't list the forms that still carry the block.
- While governed content is off, active blocks also open read-only on the **View block** page, but only by their address. The library's **Edit** button is disabled.

## Next step

Designers take the retired block off published forms: [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).
