---
title: Allow a form to be submitted offline
sidebar_label: Allow a form offline
sidebar_position: 30
description: Allow offline submissions on a form and preview which questions are hidden when the form is filled in without a connection.
actions: [offline.allow-on-form, offline.preview-offline]
---

# Allow a form to be submitted offline

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Allow offline submissions on a form so submitters can take it with them and fill it in without a connection. Each offline submission still starts the form's workflow when it syncs. Then preview the form offline to see which questions submitters won't get, before anyone fills it in.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- A form you created, created using AI, or imported.
- Offline submission is turned on for your organization. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).

## Allow offline submissions on a form

1. Go to **Build › Forms** and open your form.
2. Select the **Form** tab, then **Settings**.
3. Under **Form Permissions › Who Can Create Submissions**, select **Allow offline submissions**. It's under the **Also allow anonymous users to create submissions** checkbox.
4. Select **Save**.

## Preview how the form works offline

1. Go to **Build › Forms** and open your form.
2. In the form editor, select **Preview**.
3. Select the **Offline** tab.

The offline preview hides the questions that can't work without a connection and replaces **Submit** with **Save to offline**, with the note "Nothing is sent while you are offline." For each hidden question that is required, it shows a notice such as "Email is hidden and required. The submission comes back incomplete." Select **Online** to go back to the normal preview.

The preview uses your unsaved changes in the editor, so you can adjust the form and check again before you save.

## Check that it worked

- The **Allow offline submissions** checkbox stays selected after you save and reopen the form.
- **Preview** shows the **Online** and **Offline** tabs.

## Things to know

- **Allow offline submissions** is off by default.
- The checkbox is shown only while offline submission is on for your organization. If offline submission is turned off, the checkbox is hidden but its value is kept.
- **Allow offline submissions** doesn't depend on **Also allow anonymous users to create submissions**. Anonymous users can't submit offline.
- New versions of the form and imports of it keep the setting.
- Bundles don't use this setting.
- The offline preview shows only what it can detect. It may miss questions whose custom scripts call the network, dropdowns whose lists fail to download, and questions inside nested forms.
- Only required questions get a notice. Optional questions that can't work offline are hidden without one.
- The offline preview isn't available for bundles.
- To make the form available to submitters, publish it. Submitters can only take published forms offline.
