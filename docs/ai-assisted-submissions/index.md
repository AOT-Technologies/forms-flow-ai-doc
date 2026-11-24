---
title: AI-assisted submissions
sidebar_label: Overview
sidebar_position: 1
description: How the AI assistant helps people fill in your forms, who sets it up, what it needs, and its limits.
actions: []
---

# AI-assisted submissions

:::info Beta
AI-assisted submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

People filling in a form often stop to ask what a question means or which rules apply to them. Each question slows the submission down. Wrong answers come back as rework once the form starts its workflow. With AI-assisted submissions, a form designer gives the form its own knowledge: guidance text and reference documents. An AI assistant then appears on the form and answers the submitter's questions from that knowledge, so more submissions arrive complete and correct before the workflow picks them up.

## How it works

- AI assistant service: A separate service answers questions and indexes the documents you upload. On SaaS it's provided for you. On a self-hosted installation, your administrator deploys and connects it.
- Organization AI switch: On a multi-tenant installation, an organization administrator turns AI assistance on for the whole organization. Form designers can't turn it on for a form until this switch is on.
- Form AI settings: Each form has its own AI settings on the form's **Context** tab. AI assistance is off for every form until a designer turns it on. These settings are saved with the form and shared by every version of the form.
- Knowledge base: The assistant answers from the form's context text and the documents uploaded to the form. It doesn't open web links you add to the context text.
- Multi-turn chat: When a form allows chat, submitters can type questions and get answers. When it doesn't, submitters see only the welcome text.
- Citations: When the form allows document downloads, the assistant lists the uploaded documents it drew on as source chips under each answer. Submitters select a chip to download the document.
- Disclaimer: The assistant tells submitters it's AI and can make mistakes, and asks them to confirm before they start.
- Sessions: The conversation is kept in the submitter's browser, so reloading the page picks it up where it left off.

## Who does what

| Role | What they do | Permission |
| --- | --- | --- |
| Self-hosted administrator | Deploys and connects the AI assistant service | Server access to your installation |
| Organization administrator | Turns AI assistance on for the organization and sets organization AI options | **Manage › Organization (Billing)** |
| Form designer | Turns the assistant on for a form, adds its knowledge and sets how it greets submitters | **Design › Manage forms & flows you create and that are shared with you** |
| Submitter | Opens the assistant on a form, asks questions and checks sources | **Submit › Manage submissions (create, save drafts, resubmit)** |

## What you need

- Edition: Go, Professional or Enterprise.
- Deployment: SaaS or self-hosted. Self-hosted installations need the AI assistant service deployed and connected.
- A saved form: context text and documents can only be added to a form that has been saved at least once.
- A published form: submitters can use the assistant only on a published form.

## Known limits

- Only signed-in submitters get the assistant. Anonymous users on a public form link don't.
- The assistant isn't available on bundled forms.
- The assistant answers questions; it doesn't fill in the form.
- There are no per-field help icons. To ask about a field, the submitter names it in the chat.
- Scanned documents can't be read, because the service doesn't run text recognition (OCR).
- Only uploaded documents are cited as sources, never the context text.

## Next steps

- [Deploy and connect the AI assistant service](./deploy-ai-assistant-service.md) (self-hosted administrators)
- [Turn on AI assistance for your organization](./turn-on-ai-for-your-organization.md) (organization administrators)
- [Turn on the AI assistant for a form](./turn-on-ai-assistant-for-a-form.md) (form designers)
- [Give the assistant knowledge about your form](./add-knowledge-to-a-form.md) (form designers)
- [Get help from the AI assistant while filling in a form](./get-help-from-the-assistant.md) (submitters)
- [Reference: every action and its permission](./reference.md)
