---
title: Sync your submissions and fix problems
sidebar_label: Sync and fix submissions
sidebar_position: 60
description: See what is waiting, syncing and sent from your device, sync now, choose when your device syncs, and fix submissions that need attention.
actions: [offline.view-sync-status, offline.sync-now, offline.change-sync-mode, offline.review-needs-attention, offline.finish-incomplete, offline.view-refused]
---

# Sync your submissions and fix problems

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

A submission you saved offline in formsflow.ai only starts its workflow once it reaches the server. The **Offline** tab shows what is still on your device, lets you send it, and points you to anything that needs your help to get through.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- Offline submission is turned on for your organization.
- To sync or fix submissions, you have saved at least one on this device. See [Fill in a form without a connection](./fill-in-forms-offline.md).

## See what is waiting, syncing and sent

1. Go to **Submit › Offline**.

The tab has these sections:

- **Offline mode:** the switch for offline mode.
- **Sync:** when this device syncs, **Sync: automatically** or **Sync: ask first**.
- **Carrying (n):** the forms on this device.
- **Drafts on this device (n):** drafts saved on this device.
- **Waiting to sync (n):** submissions saved on this device and not yet sent. While syncing, it shows how many are left.
- **Needs attention (n):** submissions that couldn't get through.

When everything has gone through, the tab reads "Everything you submitted has been sent." with "Last sent at `{{time}}` today." The **What syncing means** info button explains: "Syncing is how this device sends your submissions to formsflow. A submission is sent once formsflow has received it."

## Sync waiting submissions now

When your device is set to **Ask first**, waiting submissions stay on the device until you send them.

1. Go to **Submit › Offline**.
2. Under **Waiting to sync**, select **Sync now**.

When you come back online, a banner also tells you how many submissions are waiting, with a **Sync now** button.

The toast reads "`{{count}}` form(s) sent." If you're offline, it reads "You're offline. They will be sent when you're back online." If your sign-in has expired, it reads "Your sign-in has expired. Sign in again to send them." See [Sign in and log out with unsent work](./sign-in-and-log-out.md).

## Change when this device syncs

1. Go to **Submit › Offline**.
2. In the **Sync** row, select **Change**.
3. Select **Automatically** or **Ask first**.

The row shows "Your organization's default." when you use the default, or "You changed this. Your organization's default is to …" when you don't.

## Open a submission that needs attention

1. Go to **Submit › Offline**.
2. Under **Needs attention**, select **Open** next to the submission.

Each submission shows why it needs attention:

- "The server refused this submission."
- "Came back incomplete because a question that needed a connection was hidden."
- "Needs your review: the form changed after you filled it in."

## Finish a submission that came back incomplete

1. Open the submission from **Needs attention**.
2. Answer each question marked "This question needed a connection. You can answer it now."
3. Select the form's **Submit** button. If you're still offline, it reads **Save to offline**.

The banner at the top reads, for example, "Incomplete and saved on this device. One required question was hidden while you were offline."

## View a submission the server refused

1. Open the submission from **Needs attention**.

The page title is **Offline Submission** followed by its number. A banner reads "The server refused this submission on `{{day}}` at `{{time}}`." The answers are read-only.

## Check that it worked

- A sent submission leaves **Waiting to sync**. When nothing is left, the tab reads "Everything you submitted has been sent."
- When nothing needs attention, the **Needs attention** section reads **All clear.**

## Things to know

- The **Offline** tab shows only this device's submissions.
- Failures are listed under **Needs attention** on the same tab. The count shows on the tab and on the **Submit** item in the sidebar.
- **Sync now** is shown only when sync is set to **Ask first**, you have a connection, nothing is syncing, and something is waiting.
- **Sync now** also re-sends failed submissions that have tries left. There's no manual retry once the tries are used up.
- Your device tries to send a submission 3 times: once, then after 1 minute, then after 5 minutes. After that, the submission is listed under **Needs attention**.
- Once the server has a submission, it keeps retrying on its own for up to 24 hours.
- The sync mode you choose applies to this browser only. Logging out resets it to your organization's default.
- **Change** is shown only when your installation allows automatic sync. Otherwise, your device always asks first.
- The answers of a refused submission can't be shown offline if the form isn't on your device.
- With offline submission off for your organization, the offline tabs don't appear.
