---
title: Add or remove optional content on a form
sidebar_label: Add or remove optional content
sidebar_position: 60
description: Switch your organization's optional governed content, like a consent clause, on or off for a form from its Content tab.
actions: [governed-content.toggle-optional]
---

# Add or remove optional content on a form

Your organization can offer approved wording that only some forms need, like a consent clause for forms that collect health details. In formsflow.ai you add it to a form with a switch, and it arrives locked, in its approved wording.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- A form exists. You made it with Create a new form, Create a new form using AI, or Import an existing form (see the forms documentation).
- Your organization has created optional blocks. See [Create a governed content block](./create-a-governed-content-block.md).
- The form is unpublished. The switches are disabled on published forms; unpublish the form first.

## Add or remove an optional block

1. Go to **Build › Forms ›** *your form* **› Form › Content**.
2. Under **Optional content**, find the block. Expand its row to preview the block as people filling in the form will see it.
3. Turn the block's switch on to add it to the form, or off to take it off.
4. Select **Save**.

The switch changes the form in the editor only. Until you select **Save**, the change isn't kept.

An added block goes at the end of the form. Drag it where you want it in the **Builder**. See [Place required content on a new form](./place-required-content-on-a-new-form.md#move-a-governed-block).

## Get the latest wording of an optional block

A form keeps the copy of a block it got when the block was added. When the block's owner changes the wording in the library, the form doesn't change. To bring the form up to date:

1. Go to **Build › Forms ›** *your form* **› Form › Content**.
2. Turn the block's switch off.
3. Select **Save**.
4. Turn the block's switch on again.
5. Select **Save**.

Save the form between switching the block off and on. If you switch it off and on and save only once, the form keeps the copy it already had.

The block goes back on at the end of the form with the library's current wording. Move it back into place in the **Builder**.

## Check that it worked

The **Optional content** heading shows a count, such as **3 available, 1 in use** or **3 available, none in use**. The count includes changes you haven't saved yet.

## What the Content tab shows

- **Required content** lists all of your organization's active required blocks, not only the ones on this form. You can't change them here. The section is hidden when your organization has no required blocks.
- **Optional content** lists the active optional blocks you can add, each with a switch. If there are none, it shows **Nothing optional has been defined.** and **Your organization has not made any optional content available yet.** Ask someone with **Manage › Governed content** to create the block you need.
- The preview in each row uses the library's current wording, which can differ from the copy on your form.
- If the library can't be loaded, the tab shows **Governed content could not be loaded.**

## Things to know

- Users with only **Design › View forms & flows** can see the **Content** tab, but its switches are disabled.
- The tab lists only active blocks. Retired blocks don't appear on it, even when the form still carries one.

## Next step

[Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md)
