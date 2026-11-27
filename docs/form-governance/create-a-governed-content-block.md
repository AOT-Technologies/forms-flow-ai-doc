---
title: Create a governed content block
sidebar_label: Create a governed content block
sidebar_position: 20
description: Add approved wording to your organization's governed content library so it goes on forms as a locked block.
actions: [governed-content.view-library, governed-content.create-block]
---

# Create a governed content block

Write approved wording once in formsflow.ai, and it reaches your organization's forms as a locked block that designers can't change. A required block goes on every new form built in the form builder. An optional block is there for designers to add where it fits.

## Before you start

- Permission: **Manage › Governed content**
- Governed content is on for your organization. See [Turn governed content on or off](./turn-governed-content-on-or-off.md).
- Edition: Go, Professional or Enterprise.

## Open the governed content library

1. Go to **Manage › Content**.

   If you don't see the **Manage** menu, open the library by its address: `/admin/content`, or `/tenant/<tenantKey>/admin/content` on multi-tenant installs. The menu shows only for users who can manage users, roles or dashboards.

The library lists each block in a table:

- **Name**, with a **Retired** chip on retired blocks
- **Type**: **Required** or **Optional**
- **Owner**
- **Policy reference**

Active blocks come first, then retired ones. Within each, required blocks come before optional ones, then A to Z by name.

Select the **Name** or **Owner** header to sort by that column instead. The table shows 10 rows per page; you can change it to 25, 50 or 100. Select **Refresh** to reload the list.

If the library is empty, it shows **No governed content yet** with a **Create new block** button.

## Create a block

1. Go to **Manage › Content**.
2. Select **Create new block**. The **New block** page opens.
3. In **Name**, enter a name that identifies the block in the library. It isn't shown on forms.
4. In **Heading**, enter a heading to show above the wording. This is optional.
5. In **Body**, enter the wording exactly as it was approved. Use the toolbar for bold, italic, links, and bulleted or numbered lists.
6. In **Owner**, enter who designers contact to request a change.
7. In **Policy reference**, enter the policy the wording comes from. This is optional.
8. Under **Type**, choose **Required — on every form** or **Optional — designers switch it on**.
9. Select **Create block**.
10. If you chose a required block, the **Create a required block?** dialog opens. Select **Create block** to confirm.

The **Preview** on the page shows the heading and body as people filling in the form will see them.

## Check that it worked

A toast reads **Block created successfully**, and the block is listed in the library.

## Which forms get a new block

- A required block goes on forms created in the form builder from now on. It doesn't reach forms that already exist, whatever the **Type** label or the confirmation dialog says:
  - On an existing unpublished form, designers see a banner saying required content is missing, and they can't publish until they add it.
  - A published form gets nothing until someone unpublishes it.
  - Saving a form never adds the block.

  See [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).
- An optional block appears on every form's **Content** tab for designers to switch on.

## Things to know

- **Name**, **Body**, **Owner** and **Type** are required. **Create block** stays disabled until you fill them in.
- A name can be up to 200 characters. It must be unique among active blocks, ignoring case. If it isn't, **Active governed content with this name already exists** appears under **Name**: choose another name, or retire the active block with that name first. A retired block's name is free to reuse.
- A link in the body must be a full web address starting with `http://` or `https://`. If you enter an email address, it becomes a link that opens an email.
- **Create new block** is disabled while governed content is off.
- The library doesn't show which forms carry a block.

## Next step

[Change a block's wording](./change-a-blocks-wording.md)
