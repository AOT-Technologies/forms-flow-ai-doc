---
title: Allow a form to be submitted offline
sidebar_label: Allow a form offline
sidebar_position: 30
description: Allow offline submissions on a form and preview which questions submitters won't see when they fill it in without a connection.
actions: [offline.allow-on-form, offline.preview-offline]
---

# Allow a form to be submitted offline

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Allow offline submissions on a form in formsflow.ai so submitters can take it with them and fill it in without a connection. Each offline submission still starts the form's workflow when it syncs. Then preview the form offline to see which questions submitters won't get, before anyone fills it in.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- A form. You get one by creating a new form, creating a new form using AI, or importing an existing form.
- Offline submission is turned on for your organization. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).

## Allow offline submissions on a form

1. Go to **Build › Forms** and open your form.
2. Select the **Form** tab, then **Settings**.
3. Under **Form Permissions › Who Can Create Submissions**, select **Allow offline submissions**. It's under the **Also allow anonymous users to create submissions** checkbox.
4. Select **Save**. If the form is published, **Save** is disabled: select **Unpublish** first.

## Preview how the form works offline

1. Go to **Build › Forms** and open your form.
2. Select **Preview**. The preview opens in a new browser tab.
3. Select the **Offline** tab. The **Online** and **Offline** tabs show only while offline submission is on for your organization and **Allow offline submissions** is selected on the form.

The offline preview shows the form as a submitter sees it on their device without a connection. Questions that need a connection are hidden. For each hidden question that is required, a notice names it, for example: "Email address is hidden and required. The submission comes back incomplete." Select **Online** to go back to the normal preview.

The preview uses your unsaved changes in the editor, including the **Allow offline submissions** checkbox, so you can adjust the form and check again before you save. Select **Preview** again after each change. If you refresh the preview tab, it shows the saved version instead.

## Check that it worked

- **Allow offline submissions** stays selected after you save and reopen the form's settings.
- **Preview** shows the **Online** and **Offline** tabs. (They also show before you save, because the preview follows the checkbox as it is in the editor.)

## Things to know

- **Allow offline submissions** is off by default.
- The checkbox is shown only while offline submission is on for your organization. If offline submission is turned off, the checkbox is hidden but its value is kept.
- **Allow offline submissions** doesn't depend on **Also allow anonymous users to create submissions**. Anonymous users can't submit offline.
- New versions of the form keep the setting, and so does importing a file into the existing form. Importing a file as a new form turns it off.
- Bundles don't use this setting.
- You can't change this setting through MCP.
- **Preview** is disabled until the form has been saved once.
- The offline preview uses the same checks as the submitter's device. Questions whose scripts need the network, and lists loaded from a server or URL, are always hidden.
- The offline preview doesn't look inside nested forms. On the device, a nested form that can't be downloaded is hidden.
- Only required questions get a notice. Optional questions that can't work offline are hidden without one.
- The offline preview isn't available in the bundle preview.
- Submitters can take only published forms offline. Publish the form when it's ready.

## Next step

Submitters can now [take the form with them offline](./take-forms-offline.md).
