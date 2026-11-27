---
title: Place required content on a new form
sidebar_label: Place required content on a new form
sidebar_position: 50
description: Build a new form that carries your organization's required wording, and move each locked block to where it belongs on the form.
actions: [governed-content.required-on-form, governed-content.reposition-block]
---

# Place required content on a new form

When you build a new form in formsflow.ai, your organization's required wording, like a privacy notice, is already on it, approved and locked. You put each block where it makes sense to the people filling in the form, so the form starts its workflow with the right notices in place.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- Your organization has at least one required block. See [Create a governed content block](./create-a-governed-content-block.md).

## Create a form with required content

1. Go to **Build › Forms**.
2. Select **Create New Form**.
3. Select **Create a form or flow from scratch using Form Builder**. Creating a form with AI or from a template also adds required content.
4. Build the form in the **Builder**.

The required blocks are added at the end of the form. On a new form they land below the **Submit** button, so drag them above it (see the next section). On a wizard form whose last component is a page, they go on that last page.

The builder shows the message **This form includes content your organization requires.** Select **Learn more** to open the form's **Content** tab.

Select **Dismiss** (**×**) to hide the message for this form in this browser. formsflow remembers that you dismissed it only after the form has been saved once.

## Move a governed block

1. Go to **Build › Forms ›** *your form* **› Form › Builder**.
2. Find the governed block. It has a strip that reads **Governed**, then **Owned by** with the owner and policy reference, for example "Owned by Privacy Office · POL-104", and **Locked**.
3. Drag the block to its new position.
4. Select **Save**.

:::warning
Deleting a panel, columns component or wizard page also deletes any governed block inside it. If that's a required block the form had when it was last saved, formsflow won't save the form. Drag governed blocks out of a panel, columns component or page before you delete it.
:::

## Check that it worked

- The governed blocks sit where you placed them, each with its **Governed** strip and **Locked** label.
- After you save, the blocks stay in their new positions.

## Things to know

- You can drag a governed block, but you can't edit, copy or remove it in the builder, whatever your role.
- When the form is saved, formsflow refuses changes to governed blocks and the removal of required blocks the form had when it was last saved. Users with **Manage › Governed content** or the admin role are exempt.
- Required content is added only when a form is created in the builder. Importing a form with **Upload an existing form** doesn't add it. To add it to an imported or older form, see [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).
- Required content is added to new forms even while governed content is turned off for your organization.

## Next step

[Add or remove optional content on a form](./add-or-remove-optional-content.md)
