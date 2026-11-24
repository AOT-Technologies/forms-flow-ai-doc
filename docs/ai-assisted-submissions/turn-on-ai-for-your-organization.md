---
title: Turn on AI assistance for your organization
sidebar_label: Turn on AI for your organization
sidebar_position: 20
description: Switch AI assistance on for your organization so form designers can add an AI assistant to their forms.
actions: [ai-submissions.org-toggle, ai-submissions.org-submitter-chat, ai-submissions.org-privacy-notice]
---

# Turn on AI assistance for your organization

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
AI-assisted submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

In formsflow.ai, AI assistance starts off for your organization. Turning it on lets your form designers add an AI assistant to their forms, so the people filling those forms in can get answers without leaving the page.

## Before you start

- Permission: **Manage › Organization (Billing)**
- On a self-hosted installation, the AI assistant service is deployed and connected. See [Deploy and connect the AI assistant service](./deploy-ai-assistant-service.md). On SaaS, this is done for you.
- Edition: Go, Professional or Enterprise
- A multi-tenant installation. On a single-tenant installation, see [Things to know](#things-to-know).

## Turn AI assistance on or off

1. Go to **Manage › Organization**.
2. Find the **AI Permissions** section.
3. Turn on the switch. Its label changes to **AI Form submissions assistance is ON for your organization**.
4. Select **Save**.

To turn it off, turn off the same switch and select **Save**. The label reads **AI Form submissions assistance is OFF for your organization**.

## Allow submitter chat

This option is available once the organization switch is on.

1. In the **AI Permissions** section, select **Allow Submitter AI chat in your organization**.
2. Select **Save**.

In formsflow 8.4 this option doesn't change what submitters see. Whether submitters can chat follows each form's own setting. See [Turn on the AI assistant for a form](./turn-on-ai-assistant-for-a-form.md).

## Set your organization's Privacy Notice

This field is available when both the organization switch and **Allow Submitter AI chat in your organization** are on.

1. In the **AI Permissions** section, find **Privacy Notice**.
2. Enter text that explains how your organization uses and stores the information submitters give the assistant. You can enter up to 300 characters; the counter shows how many are left.
3. Select **Save**.

## Check that it worked

After you save, the switch reads **AI Form submissions assistance is ON for your organization**. Form designers who open a form's **Context** tab now see the switch **AI form submissions assistance is OFF for this form** instead of a message that AI assistance isn't available.

## Things to know

- **Save** stays disabled until you change something.
- If **Organization (Billing)** is your only Manage permission, the sidebar doesn't show a **Manage** link.
- On a single-tenant installation, the **AI Permissions** section is shown but can't be saved. AI assistance is treated as on, and it's controlled by the installation's settings instead.
