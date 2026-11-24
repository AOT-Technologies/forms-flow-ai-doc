---
title: Turn on the AI assistant for a form
sidebar_label: Turn on the assistant for a form
sidebar_position: 30
description: Add an AI assistant to a form, choose whether submitters can chat with it, and set its name and welcome text.
actions: [ai-submissions.form-toggle, ai-submissions.form-chat-toggle, ai-submissions.form-download-toggle, ai-submissions.set-assistant-settings]
---

# Turn on the AI assistant for a form

:::info Beta
AI-assisted submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

In formsflow.ai, you can put an AI assistant beside a form so submitters get answers while they fill it in, instead of guessing or abandoning the form. When you're done, the form has its assistant switched on, you've decided whether submitters can chat with it, and it greets them with your name and welcome text.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- A form, created in the form builder, created using AI, or imported
- On a multi-tenant installation, AI assistance is on for your organization. See [Turn on AI assistance for your organization](./turn-on-ai-for-your-organization.md).
- Edition: Go, Professional or Enterprise

## Turn AI assistance on for the form

1. Go to **Build › Forms** and open your form.
2. Select the **Form** tab, then **Context**.
3. Turn on the switch. Its label changes to **AI form submissions assistance is ON for this form**.
4. Select **Save**.

The **Context Text**, **Context Documents** and **AI Settings** sections stay dimmed until the switch is on.

## Let submitters chat with the assistant

1. On the **Context** tab, in **AI Settings**, select **Allow Submitter AI chat on this form**.
2. Select **Save**.

With chat off, submitters see only the welcome text. Chat is off by default.

## Let submitters download cited documents

1. On the **Context** tab, in **Context Documents**, select or clear **Allow Submitter to download documents**.
2. Select **Save**.

This option is on by default. When it's off, submitters don't see the source chips that list the documents an answer drew on.

## Set the assistant's name and welcome text

1. On the **Context** tab, in **AI Settings**, enter an **Assistant Name**. The default is "Form Assistant". You can use up to 100 characters.
2. In **Assistant Welcome Text**, enter what submitters read first when they open the assistant. The default is "Hi! I can help you understand how to fill this form."
3. Select **Save**.

## Check that it worked

The **Context** tab shows **AI form submissions assistance is ON for this form**, and the sections below it are no longer dimmed. Once the form is published, a signed-in submitter who opens it sees the assistant with your welcome text.

## Things to know

- AI assistance is off for every form until you turn it on.
- These settings are saved when you save the form. They are shared by every version of the form, not versioned with it.
- Turning the form's AI assistance off also turns chat off.
- There's no form-level privacy text or policy link.
- If the tab shows "AI forms submission assistance is not available for your organization. Please contact your Admin to request access.", ask an organization administrator to turn AI assistance on.
- To give the assistant something to answer from, see [Give the assistant knowledge about your form](./add-knowledge-to-a-form.md).
