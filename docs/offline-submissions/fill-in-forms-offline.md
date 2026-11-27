---
title: Fill in a form without a connection
sidebar_label: Fill in a form offline
sidebar_position: 50
description: Fill in a form you carry and save it on your device to send later, save your answers when a submit can't reach the server, and keep drafts on the device.
actions: [offline.fill-form-offline, offline.save-after-failed-submit, offline.save-device-draft, offline.continue-device-draft, offline.delete-device-draft]
---

# Fill in a form without a connection

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

With no connection, you can still fill in the forms you carry in formsflow.ai. Your submission waits on your device until it syncs, and then it starts the form's workflow. You can also save your answers when a submit can't reach the server, and keep drafts on the device to finish later.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- You carry the form. See [Take forms with you offline](./take-forms-offline.md).
- To save drafts, drafts must be turned on for your installation.

## Fill in a form and save it on this device

1. Go to **Submit › Forms** and open a form you carry.
2. Fill in the form.
3. Select **Save to offline**. While offline mode is on, it replaces **Submit**, with the note "Nothing is sent while you are offline."

A toast confirms the submission is saved on this device, and it's listed under **Waiting to sync** in **Submit › Offline**. When it syncs depends on your sync mode:

- **Automatically:** it syncs on its own when the connection returns.
- **Ask first:** it waits on the device until you select **Sync now**, even after the connection returns. Your device is on **Ask first** unless your installation allows automatic sync and you or your organization chose it.

If required questions were hidden because they need a connection, the toast also reads "Some required questions need the internet. Finish them online before the form can be sent." See [Finish a submission that came back incomplete](./sync-offline-submissions.md#finish-a-submission-that-came-back-incomplete).

## Save your answers after a failed submit

This works for forms you carry, with offline mode off. If you select **Submit** and the server doesn't answer, formsflow shows the **Couldn't reach the server** dialog: "Nothing is lost. Your answers are still here. Save them on this device and they wait under Offline until they can sync."

1. Select **Save to offline**.

The submission is saved on this device and listed under **Waiting to sync**. With **Automatically**, it syncs on its own. With **Ask first**, select **Sync now** if it's still waiting once you're back online.

To stay on the form instead, select **Keep editing**. Nothing is saved on the device.

## Save a draft on this device

**Save draft** shows next to **Save to offline** while offline mode is on, if you opened the form in offline mode or from a draft on this device.

1. While filling in the form, select **Save draft**.

A banner at the top of the form reads "Draft saved on this device. It stays here until you submit it." Select × to close it. After that first save, formsflow saves the draft again when the page is hidden or closed.

If the draft can't be saved, a toast reads "The draft could not be saved on this device. Please try again." Select **Save draft** again.

:::warning
Drafts on this device aren't backed up. Logging out or clearing your browser data deletes them.
:::

## Continue a draft saved on this device

1. Go to **Submit › Offline**.
2. Under **Drafts on this device**, select **Continue** next to the draft.

You can also continue it from the form's submissions:

1. Go to **Submit › Forms**.
2. In the form's row, open the menu on the **Submit** button (▾) and select **View Submissions**.
3. Find the row that shows **On this device** and no submission ID. Drafts on this device are listed above the server's rows.
4. Select **Continue**.

## Delete a draft saved on this device

1. Go to **Submit › Offline**.
2. Under **Drafts on this device**, select **Delete** next to the draft.
3. In the **Delete This Draft?** dialog, select **Delete draft**.

:::warning
Deleting a draft can't be undone.
:::

## Check that it worked

- A saved submission is listed under **Waiting to sync** in **Submit › Offline**.
- A saved draft is listed under **Drafts on this device** in **Submit › Offline**.
- A deleted draft is gone from **Drafts on this device**.

## Things to know

- While offline mode is on, only the forms you carry open.
- These questions are hidden and made optional while you're offline: file upload, address lookup, reCAPTCHA, URL buttons, lists that load their options from a server or URL, and questions whose scripts need the network.
- Public (anonymous) forms can't be filled in offline.
- If you submit a form you carry with offline mode off and the connection is weak, formsflow keeps the submission on the device and finishes sending it on its own once the connection is good.
- Drafts saved offline stay on this device and never become drafts on the server.
- Drafts on the server can't be opened offline.
- Drafts on this device aren't available for bundles.
- If the connection drops after you open a form, you get **Save to offline** but not **Save draft**.
- While offline mode is on and the form is no longer one you carry, **Continue** under **Drafts on this device** is disabled, and **Continue online** shows next to the saved time. Continue the draft once you have a connection.

## Next step

[Sync your submissions and fix problems](./sync-offline-submissions.md).
