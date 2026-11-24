---
title: Add or remove your organization's logo
sidebar_label: Add or remove your logo
sidebar_position: 30
description: Upload your organization's logo in Manage › Appearance so it replaces the formsflow.ai logo in the menu, or remove it to go back.
actions: [app-styling.upload-logo, app-styling.delete-logo]
---

# Add or remove your organization's logo

<span className="badge badge--secondary">Added in 8.4</span>

Replace the formsflow.ai logo at the top of the menu with your organization's own, so people know whose forms and workflows they're working in. When you're done, everyone sees your logo in the expanded sidebar and the mobile menu.

## Before you start

- Permission: **Manage › App styling**
- On a self-hosted installation, logo storage must be set up first. See [Set up logo storage (self-hosted)](./set-up-logo-storage.md).
- A logo file that is:
  - JPEG, PNG or GIF (SVG isn't accepted)
  - 3 MB or smaller
  - at least 20 × 20 pixels

## Upload your logo

1. Go to **Manage › Appearance**.
2. Under **Logo**, select **Choose an image or file to upload** and pick your file, or drag the file onto it.
3. Check your logo in the preview on the right.
4. Select **Update**.

Your file isn't saved until you select **Update**.

## Replace your logo

The **Logo** section shows your saved logo in a card with its file name and a trash icon.

1. Select the trash icon on the card.
2. Select **Choose an image or file to upload** and pick the new file.
3. Select **Update**.

## Remove your logo

1. Go to **Manage › Appearance**.
2. Under **Logo**, select the trash icon on your logo's card.
3. Select **Update**.

There's no confirmation step. After **Update**, the app shows the formsflow.ai logo again.

If you select the trash icon on a new file you haven't saved yet, the card goes back to your saved logo.

## Check that it worked

You see the message "Appearance updated successfully", and the menu on your own page shows the new logo straight away. Other users see it the next time they load a page.

## If the file is rejected

| Message | What it means |
| --- | --- |
| Storage is not configured | Logo storage isn't set up on this installation. On a self-hosted installation, see [Set up logo storage (self-hosted)](./set-up-logo-storage.md). |
| Image file type is not supported | The file isn't a JPEG, PNG or GIF. |
| Image is larger than 3MB | The file is over 3 MB. |
| Image is too small | The image is smaller than 20 × 20 pixels. |

## Things to know

- The logo is fitted into a space of 112 × 48 pixels, aligned left, and never enlarged. There are no controls to crop, position or resize it, so trim extra space around your logo before you upload it.
- The hint under the upload area says images "should be 20 x 20 pixels in size". That's the minimum size, not a required size.
- The **Logo** section always shows the formsflow.ai logo at the top. Your uploaded logo appears in the card below it.
- When you've uploaded a logo, the app always uses it. To go back to the formsflow.ai logo, remove your logo.
