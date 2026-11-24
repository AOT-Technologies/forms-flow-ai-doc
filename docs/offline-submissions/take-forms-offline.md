---
title: Take forms with you offline
sidebar_label: Take forms offline
sidebar_position: 40
description: Save a copy of a form on your device so you can fill it in without a connection, remove it when you're done, and turn offline mode on or off.
actions: [offline.take-form-offline, offline.remove-form-offline, offline.switch-offline-mode]
---

# Take forms with you offline

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Before you go somewhere with a poor connection, save the forms you need on your device. In formsflow.ai, the forms on your device are the forms you are *carrying*. You can open and fill them in with no connection, and each submission starts its workflow once it syncs.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- The form is published, and offline submissions are allowed on it. See [Allow a form to be submitted offline](./allow-offline-on-a-form.md).
- Offline submission is turned on for your organization.
- Do this while you have a connection.

## Make a form available offline

1. Go to **Submit › Forms**.
2. In the form's row, open the menu on the **Submit** button (▾).
3. Select **Make available offline**.

The toast "The form is available offline." confirms it, and the form's row shows the **Offline** badge. If the form can't be saved on your device, the toast reads "This form cannot be made available offline." with the reason.

## Update a form you are carrying

When a form you carry has changed, its row shows **Update available**.

1. Go to **Submit › Forms**.
2. In the form's row, open the menu on the **Submit** button (▾).
3. Select **Update offline copy**.

formsflow also refreshes the forms you carry on its own when you have a good connection: 15 seconds after the app opens, every 30 minutes, and after you reconnect.

## Remove a form from this device

From the form list:

1. Go to **Submit › Forms**.
2. In the form's row, open the menu on the **Submit** button (▾).
3. Select **Remove from offline**. The form is removed straight away.

From the **Offline** tab:

1. Go to **Submit › Offline**.
2. Under **Carrying**, select **Remove** next to the form.
3. In the **Remove this form?** dialog, select **Remove**.

The toast "The form was removed from this device." confirms it.

## Turn offline mode on or off

Turn offline mode on before you go somewhere with a poor connection. formsflow then works only with the forms you are carrying.

1. Go to **Submit › Offline**.
2. Select the **Offline mode** switch.

## Check that it worked

- A form you carry shows the **Offline** badge in **Submit › Forms** and is listed under **Carrying** in **Submit › Offline**.
- With offline mode on, the switch reads **Offline mode is on**. When formsflow turns it on because it can't reach the server, a banner reads "Offline mode is on. We can't reach the server, so only the forms you are carrying are available."

## Things to know

- **Make available offline** is shown only for forms that allow offline submissions. The menu items are hidden while offline mode is on.
- Dropdowns that load their options from a server or URL aren't saved on the device. Those questions are hidden when you fill in the form offline.
- If a form is unpublished or stops allowing offline submissions, your copy stays on the device until you remove it.
- Removing a form doesn't remove your work. Anything waiting still syncs, and drafts stay on the device.
- Offline mode also turns on by itself when formsflow can't reach the server, and off again when the connection returns. While the connection is lost, the switch is disabled.
- Offline mode you turned on yourself stays on until you turn it off. It doesn't stop waiting submissions from syncing.
- Offline mode is stored per browser.
- While the connection is lost, pages other than **Submit** show **Not available offline** with "This page needs a connection. Your saved forms still work." Select **Go to Submit** to get back to your forms.
- Bundles can be taken offline only if your installation allows offline bundles.
