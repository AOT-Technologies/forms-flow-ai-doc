---
title: Restore the default appearance
sidebar_label: Restore the default appearance
sidebar_position: 40
description: Reset the display name, button shape and logo in Manage › Appearance back to the formsflow.ai defaults in one step.
actions: [app-styling.restore-default]
---

# Restore the default appearance

<span className="badge badge--secondary">Added in 8.4</span>

Undo all your application styling at once and go back to the standard formsflow.ai look. When you're done, the menu shows the formsflow.ai logo with no display name, and buttons are rounded.

## Before you start

- Permission: **Manage › App styling**
- Something must have been saved in **Manage › Appearance**. See [Set your organization's display name and button style](./set-display-name-and-buttons.md).

## Restore the default

1. Go to **Manage › Appearance**.
2. Select **Restore to Default**.
3. In the **Restore to Default** dialog, which asks "Are you sure you want to restore to default state?", select **Yes, Restore to default**.

To keep your settings, select **Cancel** instead.

## Check that it worked

You see the message "Appearance updated successfully". The display name field is empty, **Rounded** is selected under **Buttons**, and the menu shows the formsflow.ai logo.

If the reset fails, you see "Appearance could not be restored. Please try again."

## Things to know

- Restoring resets everything together: the display name is cleared, buttons go back to **Rounded**, and your uploaded logo is deleted. To change only one setting, edit it and select **Update** instead.
- **Restore to Default** stays disabled until something has been saved.
- Restoring doesn't change form styling in **Manage › Style**.
