---
title: Application styling
sidebar_label: Overview
sidebar_position: 1
description: How application styling puts your organization's name, logo and button style on formsflow.ai, who can change it, and what it doesn't cover.
actions: []
---

# Application styling

People who use formsflow.ai every day to design forms, run workflows and work on tasks should know they're in your organization's tool. Application styling lets an administrator put your organization's display name and logo in the app's menu and choose rounded or square buttons, with no code and no redeployment.

## How it works

All the settings live on one page: **Manage › Appearance**. You change the display name, the button shape and the logo, watch the live preview on the right, and select **Update** to save. Everyone in your organization sees the change the next time they load a page.

### App styling and form styling are separate

formsflow has two places for styling, and they don't affect each other:

- **Manage › Appearance** styles the app itself: the display name and logo in the menu, and the shape of the app's own buttons.
- **Manage › Style** styles forms: what your forms look like in the form builder and when people fill them in, including the shape of buttons inside forms.

Changing the button shape in **Manage › Appearance** doesn't change buttons inside forms, and **Restore to Default** on the Appearance page doesn't reset anything in **Manage › Style**.

### What you can set

- **Display name:** up to 20 characters, shown under the logo in the expanded menu. Leave it blank to show no name.
- **Buttons:** **Rounded** (the default) or **Square**.
- **Logo:** a JPEG, PNG or GIF image of up to 3 MB. Without one, the app shows the formsflow.ai logo.

### Where people see it

Your logo and display name appear at the top of the sidebar menu when it's expanded, and in the mobile menu. They don't appear on the login screen, the Home page, the account page or the browser tab title.

## Who does what

| Who | What they do | Permission |
| --- | --- | --- |
| Administrator | Sets the display name, logo and button shape, and restores the default | **Manage › App styling** |
| Self-hosted administrator | Sets up the storage that uploaded logos are saved in | Server access to your installation |
| Everyone who signs in | Sees the logo, display name and button shape | Any signed-in user |

A user can change the appearance if any of their roles grants **Manage › App styling**.

## What you need

- Editions: Go, Professional and Enterprise.
- Deployment: SaaS and self-hosted.
- Logo storage: on a self-hosted installation, logo upload stays off until logo storage is set up. The display name and button shape work without it.

## Known limits

- The display name shows at most 15 characters in the menu, followed by "…". The full name appears when you point at it.
- The logo is fitted into a space of 112 × 48 pixels. There are no controls to crop, position or resize it.
- The sidebar starts collapsed on every page load, and the collapsed sidebar shows neither the logo nor the display name.

## Next steps

- [Set up logo storage (self-hosted)](./set-up-logo-storage.md)
- [Set your organization's display name and button style](./set-display-name-and-buttons.md)
- [Add or remove your organization's logo](./add-or-remove-your-logo.md)
- [Restore the default appearance](./restore-default-appearance.md)
- [See your organization's logo and name in the app](./see-your-branding.md)
- [Reference: every application styling action](./reference.md)
