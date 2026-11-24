---
title: Set your organization's display name and button style
sidebar_label: Set your display name and button style
sidebar_position: 20
description: Open Manage › Appearance, set your organization's display name and button shape, check them in the live preview and save.
actions: [app-styling.open, app-styling.set-display-name, app-styling.choose-button-shape, app-styling.preview, app-styling.update]
---

# Set your organization's display name and button style

<span className="badge badge--secondary">Added in 8.4</span>

Put your organization's name in the formsflow.ai menu and match the app's buttons to your house style. When you're done, everyone who signs in sees your name under the logo and your chosen button shape across the app.

## Before you start

- Permission: **Manage › App styling**

## Open the Appearance settings

1. Open the sidebar menu and go to **Manage**.
2. Select the **Appearance** tab.

If you don't see **Manage** in the sidebar, add `/admin` to your formsflow address instead. On a multi-tenant installation, the path is `/tenant/your-tenant-key/admin`. The sidebar shows **Manage** only to users who can also manage users, roles or dashboards. When **Manage › App styling** is your only administration permission, `/admin` opens on the **Appearance** tab.

Don't confuse **Appearance** with the **Style** tab: **Style** changes how forms look, not the app.

## Set the display name

1. Under **Display name**, type your organization's name. You can use up to 20 characters.
2. To show no name, clear the field.

The menu shows the first 15 characters followed by "…", with the full name when you point at it. When you've uploaded a logo, the name is also used as its alternative text for screen readers.

## Choose rounded or square buttons

1. Under **Buttons**, select **Rounded** or **Square**.

**Rounded** is the default. The shape applies to the app's own buttons throughout formsflow. Buttons inside forms, in the form builder and in published forms, keep the shape set in **Manage › Style**.

## Preview your changes

The panel on the right is a scaled-down live copy of your Home page and menu. It shows your draft display name, logo and button shape as you edit, before you save. The menu in the preview opens expanded so you can see the logo and name.

The preview is view-only: you can't click or navigate in it.

## Save your changes

1. Select **Update**.

**Update** stays disabled until you change something. There's no confirmation step: your changes are saved straight away.

## Check that it worked

You see the message "Appearance updated successfully", and your own page updates without a reload. Other users see the change the next time they load a page.

If saving fails, you see the reason from the server, or "Appearance could not be saved. Your previous settings are unchanged."

## Things to know

- If the preview hasn't loaded after 20 seconds, it shows "Preview unavailable. Reopen this tab to try again."
- If you leave the page with unsaved changes, your browser asks whether you want to leave. formsflow doesn't save drafts.
- The display name appears only in the expanded sidebar and the mobile menu. It doesn't appear on Home, the account page, the browser tab title or the login screen.
- To add a logo, see [Add or remove your organization's logo](./add-or-remove-your-logo.md).
