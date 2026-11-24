---
title: Fill in a form without a connection
sidebar_label: Fill in a form offline
sidebar_position: 50
description: Fill in a form you carry, save it on your device to send later, keep drafts on the device, and save your answers when a submit can't reach the server.
actions: [offline.fill-form-offline, offline.save-after-failed-submit, offline.save-device-draft, offline.continue-device-draft, offline.delete-device-draft]
---

# Fill in a form without a connection

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

With no connection, you can still fill in the forms you carry in formsflow.ai. Your submission waits on your device, then syncs and starts the form's workflow when the connection returns. You can also keep drafts on the device, and save your answers if a submit fails partway.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- You carry the form. See [Take forms with you offline](./take-forms-offline.md).
- To save drafts, drafts must be turned on for your installation.

## Fill in a form and save it on this device

1. Go to **Submit › Forms** and open a form you carry.
2. Fill in the form.
3. Select **Save to offline**. While you're offline, it replaces **Submit**, with the note "Nothing is sent while you are offline."

The toast reads "Saved on this device. It will be sent when you're back online." If required questions were hidden because they need a connection, the toast reads "Saved on this device. Some required questions need the internet. Finish them online before the form can be sent." See [Finish a submission that came back incomplete](./sync-offline-submissions.md#finish-a-submission-that-came-back-incomplete).

## Save your answers after a failed submit

If you select **Submit** with offline mode off and the server doesn't answer, formsflow shows the **Couldn't reach the server** dialog: "Nothing is lost. Your answers are still here. Save them on this device and they wait under Offline until they can sync."

1. Select **Save to offline**.

The submission is saved on this device and listed under **Waiting to sync**. To stay on the form instead, select **Keep editing**.

## Save a draft on this device

1. While filling in a form offline, select **Save draft**.

The toast reads "Draft saved on this device. It stays here until you submit it." formsflow also saves the draft while you type and when the page closes.

## Continue a draft saved on this device

1. Go to **Submit › Offline**.
2. Under **Drafts on this device**, select **Continue** next to the draft.

You can also open the form from **Submit › Forms**. In the form's submissions table, a draft on this device shows **On this device** and no submission ID, above the drafts and submissions on the server. Select **Continue** to open it.

## Delete a draft saved on this device

1. Go to **Submit › Offline**.
2. Under **Drafts on this device**, select **Delete** next to the draft.
3. In the **Delete This Draft?** dialog, select **Delete draft**.

## Check that it worked

- A saved submission is listed under **Waiting to sync** in **Submit › Offline**.
- A saved draft is listed under **Drafts on this device** in **Submit › Offline**.

## Things to know

- While you're offline, only the forms you carry open.
- These questions are hidden and made optional while you're offline: file upload, address lookup, reCAPTCHA, URL buttons, lists loaded from a server, and questions whose scripts need the network.
- Public (anonymous) forms can't be filled in offline.
- **Save to offline** after a failed submit is offered only for forms you carry, with offline mode off.
- Drafts saved offline stay on this device and never become drafts on the server. They aren't backed up: clearing your browser data or logging out deletes them.
- Drafts on the server can't be opened offline.
- Drafts on this device aren't available for bundles.
- If you are offline and the form is no longer one you carry, **Continue** is disabled and reads **Continue online**.
- Deleting a draft can't be undone.
