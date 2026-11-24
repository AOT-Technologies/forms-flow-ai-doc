---
title: Create a governed content block
sidebar_label: Create a governed content block
sidebar_position: 20
description: Add approved wording to your organization's governed content library so it appears on forms as a locked block.
actions: [governed-content.view-library, governed-content.create-block]
---

# Create a governed content block

<span className="badge badge--secondary">Added in 8.4</span>

Write approved wording once in formsflow.ai, and it reaches your organization's forms as a locked block that designers can't change. A required block goes on every new form; an optional block is there for designers to add where it fits.

## Before you start

- Permission: **Manage › Governed content**
- Governed content is turned on for your organization. See [Turn governed content on or off](./turn-governed-content-on-or-off.md).
- Edition: Go, Professional or Enterprise.

## Open the governed content library

1. Go to **Manage › Content**.

   If you don't see the **Manage** menu, open the Content page by its address, which ends in `/admin/content`. The menu shows only for users who can manage users, roles or dashboards.

The library lists each block with these columns:

- **Name**, with a **Retired** chip on retired blocks
- **Type**: **Required** or **Optional**
- **Owner**
- **Policy reference**

Active blocks come before retired ones, required before optional, then A to Z by name. Select a column header to sort by that column instead. Select **Refresh** to reload the list.

If the library is empty, it shows **No governed content yet**.

## Create a block

1. Go to **Manage › Content**.
2. Select **Create new block**.
3. In **Name**, enter a name that identifies the block in the library. Designers see it on the form's **Content** tab; people filling in the form don't.
4. In **Heading**, enter a heading to show above the wording. This is optional.
5. In **Body**, enter the wording exactly as it was approved. You can use bold, italic, links, and bulleted or numbered lists.
6. In **Owner**, enter who designers contact to request a change.
7. In **Policy reference**, enter the policy the wording comes from. This is optional.
8. Under **Type**, choose **Required — on every form** or **Optional — designers switch it on**.
9. Select **Create block**.
10. If you chose a required block, the **Create a required block?** dialog opens. Select **Create block** to confirm.

## Check that it worked

The message **Block created successfully** appears, and the block is listed in the library.

## Things to know

- **Name**, **Body**, **Owner** and **Type** are required.
- A name can be up to 200 characters. It must be unique among active blocks, ignoring case. A retired block's name is free to reuse.
- Links in the body must start with `http`, `https` or `mailto`.
- **Create new block** is disabled while governed content is off.
- A new required block goes on forms created in the builder from then on. Forms that already exist don't get it automatically: when a designer opens one, an alert asks them to add it before they can publish. See [Add missing required content before publishing](./add-missing-required-content.md).
- The library doesn't show which forms carry a block.
