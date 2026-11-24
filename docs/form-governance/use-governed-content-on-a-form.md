---
title: Use governed content on a form
sidebar_label: Use governed content on a form
sidebar_position: 40
description: Work with your organization's required and optional governed content blocks when you build a form.
actions: [governed-content.required-on-form, governed-content.reposition-block, governed-content.toggle-optional, governed-content.retired-on-form]
---

# Use governed content on a form

<span className="badge badge--secondary">Added in 8.4</span>

In formsflow.ai, the wording your organization requires, like a privacy notice, arrives on your form already approved and locked. You decide where it sits and which optional blocks to add, and the form starts its workflow with the right notices in place.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- Your organization has created governed content blocks. See [Create a governed content block](./create-a-governed-content-block.md).
- To add optional content, you need a form. Create one with Create a new form, Create a new form using AI, or Import an existing form (see the forms documentation).

## Get required content on a new form

1. Go to **Build › Forms**.
2. Select **Create New Form**.
3. Build the form in the builder.

Required blocks are placed at the bottom of the form, directly above a final **Submit** button. On a wizard form, they go on the last page.

The builder shows **This form includes content your organization requires.** Select **Learn more** to open the form's **Content** tab. Select the **×** to dismiss the message for this form in this browser. Until you dismiss it, it shows each time the builder opens.

## Move a governed block

1. Go to **Build › Forms ›** *your form* **› Form › Builder**.
2. Drag the governed block to its new position.
3. Select **Save**.

A governed block shows a strip with **Governed**, **Owned by** *owner* · *policy reference*, and **Locked**. You can drag it, but you can't edit, copy or remove it in the builder.

## Add or remove optional content

1. Go to **Build › Forms ›** *your form* **› Form › Content**.
2. Under **Optional content**, find the block. Expand the row to preview the block as respondents will see it.
3. Turn the block's switch on to add it to the form, or off to remove it.
4. Select **Save**.

The **Content** tab has two sections:

- **Required content**: the required blocks on this form. This section is read-only.
- **Optional content**: the optional blocks you can add, with a count such as **3 available, 1 in use**. If your organization hasn't defined any, it shows **Nothing optional has been defined.**

## When a block is retired

When your organization retires a block, there's nothing for you to do. The next time you save a form that carries the block, formsflow removes it.

## Check that it worked

- In the builder, each governed block shows the **Governed** strip and the **Locked** label.
- On the **Content** tab, the **Optional content** count shows how many optional blocks are in use.

## Things to know

- Required content is added only when a form is created in the builder. Forms created before a required block existed don't get it automatically. See [Add missing required content before publishing](./add-missing-required-content.md).
- The switches on the **Content** tab are disabled on published forms. Unpublish the form to change its optional content.
- Users with only **Design › View forms & flows** can see the **Content** tab, but its switches are disabled.
- The **Content** tab lists only active blocks. It doesn't show retired blocks, and until you save the form, the builder shows a retired block like any other governed block.
- The lock applies in the builder and when a form is saved. Imported forms aren't checked.
