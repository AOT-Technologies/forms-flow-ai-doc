---
title: Change a block's wording
sidebar_label: Change a block's wording
sidebar_position: 30
description: Update the approved wording, owner, policy reference or type of a governed content block in your organization's library.
actions: [governed-content.edit-block]
---

# Change a block's wording

When a policy changes, you update its approved wording in one place in formsflow.ai: the governed content library. New forms pick up the new wording. Forms that already carry the block keep the copy they have until the block is added to them again.

## Before you start

- Permission: **Manage › Governed content**
- The block exists and isn't retired. See [Create a governed content block](./create-a-governed-content-block.md).
- Governed content is on for your organization. While it's off, **Edit** is disabled.

## Edit a block

1. Go to **Manage › Content**.
2. Find the block and select **Edit**. The **Edit block** page opens.
3. Change the **Name**, **Heading**, **Body**, **Owner**, **Policy reference** or **Type**.
4. Select **Save changes**.
5. The **Save this change?** dialog opens. Select **Save change**.

To leave without saving, select **Cancel**. If you've made changes, the **You have unsaved changes** dialog opens. Select **Keep editing** to go back, or **Discard changes** to leave.

:::warning
**Discard changes** throws away everything you changed since you last saved. Closing the browser tab with unsaved changes shows the browser's own prompt; leaving the page from it also loses your changes.
:::

## Check that it worked

A toast reads **Block updated successfully**, and the library shows the block's new name, owner, policy reference or type.

## Where the new wording appears

The edit page and the **Save this change?** dialog say your change reaches each form the next time someone opens and saves it. In formsflow.ai 8.4 it doesn't. Saving a form keeps the copy of the block the form already has.

New wording reaches a form only when the block is added to it again:

- New forms built in the form builder get the new wording.
- An optional block on an existing form gets the new wording when a designer switches it off on the form's **Content** tab and saves the form, then switches it back on and saves again. See [Add or remove optional content on a form](./add-or-remove-optional-content.md).
- Missing required content that a designer adds from the banner on a form gets the new wording.

To find forms carrying an older copy, a developer can use the REST API, which reports each form's copy as outdated when a newer version exists. See [Check a form's governed content through the API](./check-governed-content-through-the-api.md).

## Things to know

- Retired blocks can't be edited.
- Changing a block from optional to required makes every form without it miss required content. Designers can't publish those forms until they add it. See [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).
- The block's version number goes up when its heading, body, owner or policy reference changes, not when only its name or type changes. The web app doesn't show the version.
- While governed content is off, **Edit** is disabled in the library. You can still open an active block read-only by its address: `/admin/content/` followed by the block's ID, or `/tenant/<tenantKey>/admin/content/` followed by the ID on multi-tenant installs.

## Next step

[Retire a governed content block](./retire-a-block.md)
