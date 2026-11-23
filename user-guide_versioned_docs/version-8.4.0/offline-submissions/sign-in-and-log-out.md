---
title: Sign in and log out with unsent work
sidebar_label: Sign in and log out with unsent work
sidebar_position: 70
description: Sign in again when your sign-in expires, and log out without losing submissions and drafts that are still on your device.
actions: [offline.sign-in-again, offline.log-out-unsent]
---

# Sign in and log out with unsent work

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Submissions and drafts you save offline in formsflow.ai live only on your device until they sync. Signing in again keeps them there and lets them send. Logging out deletes them, so sync first.

## Before you start

- Permission: any signed-in user.
- Offline submission is turned on for your organization.

## Sign in again after your sign-in expires

When your sign-in expires, a banner reads "Your sign-in has expired. Sign in again to continue." formsflow saves the form you have open first.

1. In the banner, select **Sign in**.
2. Sign in as usual.

Your unsent work is still on the device, and anything waiting can now sync.

## Log out with unsent work on this device

1. In the sidebar, select **Logout**.
2. If anything is still on this device, formsflow asks first. Read the dialog and choose:
   - **Sync and log out:** sends what is waiting, then logs you out. While a sync is running, this button reads **Log out when done**.
   - **Cancel:** stays signed in.
   - **Log out anyway:** logs you out and deletes what is on this device.

The dialog title tells you what is at risk:

- **Log out without sending?** Submissions are waiting to sync.
- **Log out and delete your drafts?** Only drafts are on this device.
- **Log out while syncing?** A sync is running. The dialog shows its progress, for example "Syncing 2 of 5."

If you're offline, or there's nothing to send, the dialog offers only **Cancel** and **Log out anyway**.

## Check that it worked

- After you sign in again, the banner is gone. Waiting submissions sync, or wait for **Sync now** if your device is set to **Ask first**.
- After **Sync and log out**, you're logged out once nothing is left to send. If some submissions couldn't be sent, you stay signed in and the dialog reads "Some submissions could not be sent. They are still on this device."

## Things to know

- With offline submission on, an expired sign-in doesn't log you out. Your unsent work stays on the device until you sign in again.
- Sending submissions needs a current sign-in.
- You can start the app with no connection for up to 24 hours after you were last online.
- Logging out deletes your offline data from this device, including drafts and anything waiting to sync. This can't be undone.
- Logging out in another browser tab doesn't ask first.
