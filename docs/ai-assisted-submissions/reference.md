---
title: "AI-assisted submissions: reference"
sidebar_label: Reference
sidebar_position: 90
description: "Every ai-assisted submissions action in formsflow.ai 8.4: the permission it needs, where to find it, and which editions include it."
generated: true
---

# AI-assisted submissions: reference

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
AI-assisted submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

This page lists every ai-assisted submissions action in formsflow.ai 8.4, the permission each one needs, and where to find it.

## Availability

- **Editions:** Go, Professional, Enterprise
- **Deployment:** SaaS and self-hosted. Self-hosted only: deploy and connect the ai assistant service (self-hosted)

## Actions and permissions

Permissions are named as they appear on the role editor in **Manage › Roles**. A user can do an action if any of their roles grants the permission.

| What you want to do | Permission needed | Where to find it | Available through |
| --- | --- | --- | --- |
| Deploy and connect the AI assistant service (self-hosted) | Server access to your installation (self-hosted) | — | Deployment configuration |
| Turn AI assistance on or off for the organization | Manage › Organization (Billing) | Manage › Organization › AI Permissions | formsflow.ai web app |
| Allow submitter chat for the organization | Manage › Organization (Billing) | Manage › Organization › AI Permissions | formsflow.ai web app |
| Set the organization's Privacy Notice for the AI assistant | Manage › Organization (Billing) | Manage › Organization › AI Permissions | formsflow.ai web app |
| Turn AI assistance on for a form | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context | formsflow.ai web app, REST API |
| Turn submitter chat on or off for a form | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › AI Settings | formsflow.ai web app, REST API |
| Let submitters download cited documents | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › Context Documents | formsflow.ai web app, REST API |
| Add or edit a form's context text | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › Context Text | formsflow.ai web app, REST API |
| Upload context documents | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › Context Documents › Upload file(s) | formsflow.ai web app, REST API |
| Give a context document an alternative name | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › Context Documents › &lt;document&gt; › Edit | formsflow.ai web app, REST API |
| Delete a context document | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › Context Documents › &lt;document&gt; › Delete | formsflow.ai web app, REST API |
| Download a context document | Design › View forms & flows (Context tab); any signed-in submitter (source chips) | Build › Forms › &lt;form&gt; › Form › Context › Context Documents; source chips in the assistant | formsflow.ai web app, REST API |
| Set the assistant's name and welcome text | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Context › AI Settings | formsflow.ai web app, REST API |
| Open the AI assistant on a form | Submit › Manage submissions (create, save drafts, resubmit) | Submit › &lt;form&gt;; editing a draft | formsflow.ai web app |
| Ask the AI assistant questions about a form | Submit › Manage submissions (create, save drafts, resubmit) | Submit › &lt;form&gt; › assistant › Ask a question... | formsflow.ai web app, REST API |
| See which documents an answer drew on | Submit › Manage submissions (create, save drafts, resubmit) | Submit › &lt;form&gt; › assistant, under each answer | formsflow.ai web app |
| Pick up an AI conversation after reloading the page | Submit › Manage submissions (create, save drafts, resubmit) | Automatic | formsflow.ai web app, REST API |
