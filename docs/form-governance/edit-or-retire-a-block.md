---
title: Edit or retire a governed content block
sidebar_label: Edit or retire a block
sidebar_position: 30
description: Change a governed content block's wording or type, retire a block that's no longer needed, and view a retired block.
actions: [governed-content.edit-block, governed-content.retire-block, governed-content.view-retired-block]
---

# Edit or retire a governed content block

<span className="badge badge--secondary">Added in 8.4</span>

Policies change. In formsflow.ai you update the approved wording in one place, the governed content library, or retire a block when your organization no longer needs it on its forms.

## Before you start

- Permission: **Manage › Governed content**
- The block exists. See [Create a governed content block](./create-a-governed-content-block.md).
- Governed content is turned on for your organization. While it's off, blocks can't be edited or retired.

## Edit a block

1. Go to **Manage › Content**.
2. Find the block and select **Edit**.
3. Change the **Name**, **Heading**, **Body**, **Owner**, **Policy reference** or **Type**.
4. Select **Save changes**.
5. In the **Save this change?** dialog, select **Save change**.

If you leave the page with unsaved changes, the **You have unsaved changes** dialog asks whether to **Keep editing** or **Discard changes**.

### Check that it worked

The message **Block updated successfully** appears. The block's version number goes up whenever its content changes.

## Retire a block

Retiring can't be undone. A retired block can't be restored.

1. Go to **Manage › Content**.
2. Find the block, open the menu next to **Edit**, and select **Retire**. Or open the block with **Edit** and select **Retire block**.
3. In the **Retire this block?** dialog, select **Retire**.

### Check that it worked

The message **Block retired successfully** appears. The block stays in the library with a **Retired** chip and moves to the end of the list.

## View a retired block

1. Go to **Manage › Content**.
2. Find the retired block and select **View**.

The **View block** page shows the block's details with a **Retired** chip and the notice **Retired on** *date*. It's read-only, with no actions on the block.

## Things to know

- Retired blocks can't be edited.
- A retired block stays on each form that carries it, including live forms, until that form is next saved. Saving the form removes it. See [Use governed content on a form](./use-governed-content-on-a-form.md#when-a-block-is-retired).
- After you retire a block, its name is free to use for a new block.
- The **View block** page doesn't list the forms that still carry the block.
- While governed content is off, **Edit** is disabled in the library. You can still open an active block read-only by its address, which ends in `/admin/content/` followed by the block's ID.
