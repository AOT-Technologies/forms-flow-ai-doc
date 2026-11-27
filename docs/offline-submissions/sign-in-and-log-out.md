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

Submissions and drafts you save offline in formsflow.ai live only on your device until they sync. Signing in again keeps them there and lets them send, so their workflows can start. Logging out deletes them, so sync first.

## Before you start

- Permission: any signed-in user.
- Offline submission is turned on for your organization. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).

## Sign in again after your sign-in expires

With offline submission on, an expired sign-in doesn't log you out. A banner reads "Your sign-in has expired. Sign in again to continue." Your unsent work stays on the device until you sign in again.

1. In the banner, select **Sign in**. If you have a form open that you opened while offline, or from a draft on this device, formsflow first saves your answers as a draft on this device.
2. Sign in as usual.

## Log out with unsent work on this device

1. In the sidebar, select **Logout**.
2. If anything is still on this device, formsflow asks first. The dialog's title tells you what is at risk:
   - **Log out without sending?** Submissions are waiting to sync.
   - **Log out and delete your drafts?** Only drafts are on this device. Nothing is waiting or syncing.
   - **Log out while syncing?** Submissions are still syncing. The dialog shows its progress, for example "Syncing 2 of 5."
3. Choose one. When submissions are waiting and you're online, the dialog offers:
   - **Sync and log out:** sends what is waiting, then logs you out. While a sync is running, this button reads **Log out when done**.
   - **Cancel:** stays signed in.
   - **Log out anyway:** logs you out and deletes what is on this device.

:::warning
Logging out deletes your offline data from this device, including drafts and anything waiting to sync. This can't be undone. Select **Sync and log out**, or **Cancel** and sync first, if you want to keep it.
:::

If you're offline, or nothing is waiting to send (only drafts, or submissions formsflow is already saving), the dialog offers only **Cancel** and **Log out anyway**. If you're offline, select **Cancel**, and log out once you're back online and everything has synced.

If formsflow can't show its dialog, for example on an admin page, the browser's own confirm box asks instead, for example: "2 submission(s) haven't been sent. Logging out deletes them from this device, and this can't be undone. Log out anyway?" Select **Cancel** to stay signed in.

## Check that it worked

- After you sign in again, the banner is gone. Waiting submissions sync on their own if your device is set to **Automatically**, or wait for **Sync now** if it's set to **Ask first**.
- After **Sync and log out**, you're logged out once nothing is left to send. If some submissions couldn't be sent, you stay signed in and the dialog reads "Some submissions could not be sent. They are still on this device." Check **Submit › Offline** to see what is waiting or needs attention.

## Things to know

- Sending submissions needs a current sign-in.
- You can start the app with no connection for up to 24 hours by default after you were last signed in online.
- The check before logging out runs once, in the browser tab where you log out. It covers the offline data all your tabs share.
