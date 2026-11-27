---
title: Turn on offline submission for your organization
sidebar_label: Turn on offline submission
sidebar_position: 20
description: Turn offline submission on or off for your organization and choose whether submissions sync automatically by default.
actions: [offline.toggle-org, offline.set-default-sync]
---

# Turn on offline submission for your organization

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Turn on offline submission in formsflow.ai so the people in your organization can take forms offline and fill them in without a connection. Each submission starts its workflow once it syncs. You can also choose whether submissions sync on their own when the connection returns, or wait for the submitter.

## Before you start

- Permission: **Manage › Organization (Billing)**
- On a self-hosted installation, the offline services are deployed and turned on. See [Set up the offline services (self-hosted)](./set-up-offline-services.md). On SaaS, this is done for you.
- Edition: Go, Professional or Enterprise.

## Turn offline submission on or off

1. Go to **Manage › Organization**.
2. Find the **Offline Submission** section.
3. Select the switch. It saves straight away, with no confirmation.

The switch reads **Offline submission is on** or **Offline submission is off**. In both states, the help text reads "Submitters can take forms offline and fill them in without a connection."

## Choose the default sync mode

The default decides what happens on submitters' devices when the connection returns. This setting is shown only when your installation allows automatic sync.

1. Go to **Manage › Organization**.
2. In the **Offline Submission** section, find **Automatic sync**.
3. Select the switch. It saves straight away.

- **Automatic sync is on:** "Submissions sync on their own when the connection returns. Each submitter can change this on their own device."
- **Automatic sync is off:** "Submitters are asked before anything syncs, so a backlog does not go all at once. Each submitter can change this on their own device." The default is **Ask first**: submissions wait on each device until the submitter selects **Sync now**, unless the submitter has changed this on their device.

## Check that it worked

A **Saved** toast appears and the switch shows the new state. Your own browser follows the change straight away. Other users get it the next time they open formsflow.ai while online, or when their connection returns.

If the change can't be saved, a toast reads "The setting could not be saved. Please try again." Select the switch again.

## Things to know

- Offline submission is off by default.
- When you turn offline submission off, the web app stops sending, so submissions keep waiting on submitters' devices. Submissions that reach the server anyway, and any it already had, are held for up to 6 days by default. After that, they fail. Once offline submission is on again, they're listed under **Needs attention** on the submitter's device, where **Contact support** is the next step. Submissions and drafts already on devices stay there.
- **Automatic sync** is disabled while offline submission is off. Turning offline submission off also turns automatic sync off.
- Without automatic sync on the installation, every submitter is on **Ask first** and can't change it.
- Submitters can override the default sync mode on their own device. You can't stop that.
- The **Offline Submission** section is shown only when the installation has offline submission turned on.
- If **Manage › Organization (Billing)** is a user's only **Manage** permission, the **Manage** menu doesn't show for them. They need the page's address to open it.

## Next step

[Allow a form to be submitted offline](./allow-offline-on-a-form.md).
