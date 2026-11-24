---
title: Turn on offline submission for your organization
sidebar_label: Turn on offline submission
sidebar_position: 20
description: Turn offline submission on or off for your organization and choose whether submissions sync automatically by default.
actions: [offline.toggle-org, offline.set-default-sync]
---

# Turn on offline submission for your organization

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Turn on offline submission so the people in your organization can take forms offline, fill them in without a connection, and have each submission start its workflow once it syncs. You also choose whether submissions sync on their own or wait for the submitter.

## Before you start

- Permission: **Manage › Organization (Billing)**
- On a self-hosted installation, the offline services are deployed and turned on. See [Set up the offline services (self-hosted)](./set-up-offline-services.md). On SaaS, this is done for you.
- Edition: Go, Professional or Enterprise.

## Turn offline submission on or off

1. Go to **Manage › Organization**.
2. Find the **Offline Submission** section.
3. Select the switch labelled **Offline submission is on** or **Offline submission is off**. It saves straight away.

When it's on, the switch reads **Offline submission is on**, with the help text "Submitters can take forms offline and fill them in without a connection." When it's off, it reads **Offline submission is off**.

## Choose the default sync mode

The default decides what happens when a submitter's connection returns.

1. Go to **Manage › Organization**.
2. Find the **Offline Submission** section.
3. Select the switch labelled **Automatic sync is on** or **Automatic sync is off**. It saves straight away.

- **Automatic sync is on:** "Submissions sync on their own when the connection returns. Each submitter can change this on their own device."
- **Automatic sync is off:** "Submitters are asked before anything syncs, so a backlog does not go all at once. Each submitter can change this on their own device."

## Check that it worked

After the change, formsflow shows the toast **Saved**. Submitters see the change at their next sign-in or when they reconnect.

## Things to know

- Offline submission is off by default.
- The switches save with no confirmation, including when you turn offline submission off.
- While offline submission is off, new offline submissions aren't accepted. Submissions the server has already received wait for up to 6 days. Data already on submitters' devices stays there.
- The automatic sync setting is shown only when the installation also turns on automatic sync. Without it, every submitter is on **Ask first** and can't change it.
- The automatic sync setting is disabled while offline submission is off. Turning offline submission off also turns automatic sync off.
- Submitters can override the default on their own device. You can't stop that.
- The **Offline Submission** section is shown only when the installation has offline submission turned on.
