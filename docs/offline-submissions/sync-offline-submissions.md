---
title: Sync your submissions and fix problems
sidebar_label: Sync and fix submissions
sidebar_position: 60
description: See what is waiting, syncing and sent from your device, sync now, choose when your device syncs, and deal with submissions that need attention.
actions: [offline.view-sync-status, offline.sync-now, offline.change-sync-mode, offline.review-needs-attention, offline.finish-incomplete, offline.view-refused]
---

# Sync your submissions and fix problems

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

A submission you saved offline in formsflow.ai starts its workflow only once it reaches the server. The **Offline** tab shows what is still on your device, lets you send it, and lists anything that needs your help to get through.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- Offline submission is turned on for your organization. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).
- To sync or fix submissions, you have saved at least one on this device. See [Fill in a form without a connection](./fill-in-forms-offline.md).

## See what is waiting, syncing and sent

1. Go to **Submit › Offline**.

From top to bottom, the tab shows:

- The offline mode switch.
- The sync row: **Sync: automatically** or **Sync: ask first**.
- **Carrying (n):** the forms on this device.
- **Drafts on this device (n):** drafts saved on this device. This section is hidden when there are none.
- **Waiting to sync:** submissions saved on this device that formsflow hasn't received yet, including ones the device is still retrying. While syncing, it shows how many are being sent.
- **Needs attention:** submissions that couldn't get through on their own.

**Waiting to sync** and **Needs attention** show a count only when they aren't empty. Point to the info (**i**) button next to **Waiting to sync** for a short explanation of syncing.

When nothing is waiting, **Waiting to sync** reads:

- For 10 minutes after the last send: "Everything you submitted has been sent." with, for example, "Last sent at 2:45 PM today."
- After that: "Nothing waiting to sync." with the same "Last sent at" line. If the last send was on another day, the line includes the date, for example "Last sent at Oct 12, 2:45 PM."
- If nothing has been sent from this device recently: "Nothing saved yet."

## Sync waiting submissions now

When your device is set to **Ask first**, waiting submissions stay on the device until you send them.

1. Go to **Submit › Offline**.
2. Under **Waiting to sync**, select **Sync now**.

When you come back online with submissions waiting, a banner on the **Submit** page and at the top of the **Offline** tab also reads, for example, "You are back online. 3 submissions are waiting to sync." with a **Sync now** button.

Submissions you sync show **Syncing** under **Waiting to sync** until formsflow has saved them. Then they leave the list. If the sync can't finish, a toast tells you why:

- "You're offline. They will be sent when you're back online." Your submissions stay under **Waiting to sync**. Select **Sync now** again once you have a connection, or let them sync on their own if your device is set to **Automatically**.
- "Your sign-in has expired. Sign in again to send them." See [Sign in again after your sign-in expires](./sign-in-and-log-out.md#sign-in-again-after-your-sign-in-expires).

## Change when this device syncs

**Change** is shown only when your installation allows automatic sync. Otherwise, your device always asks first.

1. Go to **Submit › Offline**.
2. In the sync row, select **Change** to switch to the other mode. To pick a mode instead, select the arrow next to **Change** and choose **Automatically** or **Ask first**.

The sync row shows "Your organization's default." when you use the default. When you don't, it reads, for example, "You changed this. Your organization's default is to ask first."

## Open a submission that needs attention

Your device tries to send each submission 3 times: once, then after 1 minute, then after 5 minutes. If it still can't get through, it's listed under **Needs attention**. A submission the server refuses, or one that needs your review, goes there straight away. Having no connection or an expired sign-in doesn't use up a try.

1. Go to **Submit › Offline**.
2. Under **Needs attention**, select **Open** next to the submission.

Each submission shows why it needs attention:

- "Came back incomplete because a question that needed a connection was hidden." Opening it lets you finish it. See [Finish a submission that came back incomplete](#finish-a-submission-that-came-back-incomplete).
- "Needs your review: the form changed after you filled it in." Opening it lets you check your answers and submit again.
- The server's own reason, for example that it gave up after several tries or that the submission waited too many days to be saved. If the server gave no reason, it reads "The server could not save the form right now." Opening it shows the submission's answers and **Contact support**. See [View a submission the server refused](#view-a-submission-the-server-refused).

When nothing needs attention, the section reads "All clear." While something does, the **Offline** tab shows how many, and so does the **Submit** item in the sidebar (a dot when the sidebar is collapsed).

## Finish a submission that came back incomplete

1. Open the submission from **Needs attention**.
2. A banner reads "Incomplete and saved on this device. One required question was hidden while you were offline." With several, it reads, for example, "2 required questions were hidden while you were offline." Select **See details** to go to the first one.
3. Answer each question marked "This question needed a connection. You can answer it now."
4. Select the form's **Submit** button. If you're still offline, it reads **Save to offline**.

A submission that needs review opens with "Saved on this device. The form changed after you filled it in. Check your answers and submit again." Check your answers, then select **Submit**.

## View a submission the server refused

1. Open the submission from **Needs attention**. The page title is **Offline Submission** followed by its number, for example **Offline Submission 12**. A banner reads, for example, "The server refused this submission on June 12 at 2:45 PM." The answers are shown read-only.
2. Select **Contact support**. Your email app opens a new message to support.
3. Send the message.

The subject reads, for example, "Offline submission 12 was refused: Site inspection". The message includes the form, when it was refused, the reason, the receipt number and, when there is one, your organization. It never includes your answers.

## Check that it worked

- A sent submission leaves **Waiting to sync**. When nothing is left, the tab reads "Everything you submitted has been sent."
- When nothing needs attention, **Needs attention** reads "All clear."

## Things to know

- The **Offline** tab shows only this device's submissions.
- Failures are listed under **Needs attention** on the same tab. There's no separate tab for them.
- While syncing, the tab shows a count, not a progress bar.
- **Sync now** is shown only when sync is set to **Ask first**, you have a connection, nothing is syncing, and something is waiting.
- **Sync now** also re-sends failed submissions that have tries left. There's no manual retry once the tries are used up.
- Once the server has a submission, it retries on its own for up to 24 hours by default, counted from its first failed try.
- The sync mode you choose applies to this browser only. Logging out resets it to your organization's default.
- The answers of a refused submission can't be shown offline if the form isn't on your device.
- The refused submission's page doesn't show the reason. The reason shows in the **Needs attention** list and in the support email.
- With offline submission off for your organization, the offline tabs don't appear.

## Next step

[Sign in and log out with unsent work](./sign-in-and-log-out.md).
