---
title: Offline form submissions
sidebar_label: Overview
sidebar_position: 1
description: How offline form submissions work in formsflow.ai 8.4, who sets them up, and what you need before people can fill in forms without a connection.
actions: []
---

# Offline form submissions

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

People who collect information in the field, in basements or on the road often lose their connection halfway through a form. With offline form submissions in formsflow.ai, they fill in the form on their device and save it there. When the connection returns, the device sends it. Each submission is then saved on the server and starts the form's workflow, the same as a form submitted online.

## How it works

1. An administrator turns on offline submission for the organization.
2. A form designer allows offline submissions on each form that should work without a connection.
3. A submitter selects **Make available offline** on that form. A copy of the form is saved on their device. The forms saved on a device are the forms the submitter is *carrying*.
4. Without a connection, the submitter opens a form they carry, fills it in and selects **Save to offline**. The submission waits on the device.
5. When the connection returns, the device *syncs*: it sends what is waiting. Depending on the sync mode, this happens on its own or when the submitter selects **Sync now**.
6. Once formsflow has received the submission, it is *sent*. The server saves it and starts the form's workflow on the submitter's behalf.

### Offline mode

Offline mode is the state where formsflow works only with the forms you carry. It turns on by itself when formsflow can't reach the server, and off again when the connection returns. You can also turn it on yourself before you go somewhere with a poor connection. Then it stays on until you turn it off or log out. While the connection is lost, only the **Submit** pages work. Other pages show **Not available offline**.

### Sync modes

- **Automatically:** waiting submissions sync on their own when the connection returns.
- **Ask first:** waiting submissions stay on the device until the submitter selects **Sync now**.

Automatic sync is available only when the installation allows it. Without that, every submitter is on **Ask first**. When it is available, the organization sets the default and each submitter can change it for their own browser.

### Questions that need a connection

Some questions can't work offline: file uploads, address lookups, reCAPTCHA, URL buttons, lists loaded from a server or URL, and questions whose scripts need the network. Offline, these questions are hidden and made optional. If a hidden question was required, the submission comes back *incomplete*, and the submitter answers that question online before it can be sent.

### Submissions that need attention

Most submissions sync without help. Some can't get through on their own: the server refused them, they came back incomplete, or the form changed after they were filled in. These are listed under **Needs attention** in **Submit › Offline**, and the submitter opens each one to finish it or to contact support.

### Drafts on this device

A draft saved while working offline stays on that device. It never becomes a draft on the server, and it isn't backed up. Logging out or clearing the browser's data deletes it.

## Who does what

| Role | What they do | Permission |
| --- | --- | --- |
| Self-hosted administrator | Deploys and configures the offline services | Server access to your installation |
| Organization administrator | Turns offline submission on and sets the default sync mode | **Manage › Organization (Billing)** |
| Form designer | Allows offline submissions on a form and previews it offline | **Design › Manage forms & flows you create and that are shared with you** |
| Submitter | Takes forms offline, fills them in, syncs and deals with what needs attention | **Submit › Manage submissions (create, save drafts, resubmit)** |
| Developer | Sends offline submissions and checks their status through the API | **Submit › Manage submissions (create, save drafts, resubmit)** |

Any signed-in user can sign in again after their sign-in expires. They can also log out with unsent work on the device.

## What you need

- Edition: Go, Professional or Enterprise.
- Deployment: SaaS or self-hosted. On a self-hosted installation, the offline services must be deployed and turned on first. On SaaS, this is done for you.
- Organization setting: offline submission is off by default. An administrator turns it on in **Manage › Organization › Offline Submission**.
- Form setting: **Allow offline submissions** is off by default on each form.

## Known limits

- Anonymous users can't submit offline, and public forms can't be filled in offline.
- Everything waiting is stored in the browser on that device. Logging out deletes it, including drafts and submissions waiting to sync.
- The **Offline** tab shows only the submissions from the device you are using.
- A submission that has used up its tries can't be retried by hand.
- Drafts on the server can't be opened offline.
- Starting the app with no connection works for up to 24 hours after you last signed in online.

## Next steps

- [Set up the offline services (self-hosted)](./set-up-offline-services.md)
- [Turn on offline submission for your organization](./turn-on-offline-submission.md)
- [Allow a form to be submitted offline](./allow-offline-on-a-form.md)
- [Take forms with you offline](./take-forms-offline.md)
- [Fill in a form without a connection](./fill-in-forms-offline.md)
- [Sync your submissions and fix problems](./sync-offline-submissions.md)
- [Sign in and log out with unsent work](./sign-in-and-log-out.md)
- [Send offline submissions through the API](./offline-submissions-api.md)
