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

People who collect information in the field, in basements or on the road often lose their connection halfway through a form. With offline form submissions, they fill in the form on their device, save it there, and formsflow sends it when the connection returns. Each submission is saved on the server and starts the form's workflow, the same as a form submitted online.

## How it works

1. An administrator turns on offline submission for the organization.
2. A form designer allows offline submissions on each form that should work without a connection.
3. A submitter makes that form available offline. A copy of the form is saved on their device. The forms on a device are the forms the submitter is *carrying*.
4. Without a connection, the submitter fills in the form and selects **Save to offline**. The submission waits on the device.
5. When the connection returns, the device *syncs*: it sends what is waiting. Depending on the sync setting, this happens automatically or when the submitter selects **Sync now**.
6. Once the server has the submission, it is *sent*. The server saves it and starts the form's workflow on the submitter's behalf.

### Offline mode

Offline mode is the state where formsflow works only with the forms you are carrying. It turns on by itself when formsflow can't reach the server, and off again when the connection returns. You can also turn it on yourself before you go somewhere with a poor connection. While the connection is lost, only the **Submit** pages work. Other pages show **Not available offline**.

### Sync modes

- **Automatically:** waiting submissions sync on their own when the connection returns.
- **Ask first:** waiting submissions stay on the device until the submitter selects **Sync now**.

The organization sets the default. Each submitter can change it for their own browser.

### What happens to questions that need a connection

Some questions can't work offline: file uploads, address lookups, reCAPTCHA, URL buttons, dropdowns that load their options from a server, and questions whose scripts need the network. Offline, these questions are hidden and made optional. If a hidden question was required, the submission comes back *incomplete* and the submitter finishes it online.

### Drafts on this device

A draft saved while working offline stays on that device. It never becomes a draft on the server, and it isn't backed up.

## Who does what

| Role | What they do | Permission |
| --- | --- | --- |
| Self-hosted administrator | Deploys and configures the offline services | Server access to your installation |
| Organization administrator | Turns offline submission on and sets the default sync mode | **Manage › Organization (Billing)** |
| Form designer | Allows offline submissions on a form and previews it offline | **Design › Manage forms & flows you create and that are shared with you** |
| Submitter | Takes forms offline, fills them in, syncs and fixes what needs attention | **Submit › Manage submissions (create, save drafts, resubmit)** |
| Developer | Sends offline submissions and checks their status through the API | **Submit › Manage submissions (create, save drafts, resubmit)** |

## What you need

- Edition: Go, Professional or Enterprise.
- Deployment: SaaS or self-hosted. On a self-hosted installation, the offline services must be deployed and turned on first. On SaaS, this is done for you.
- Organization setting: offline submission is off by default. An administrator turns it on in **Manage › Organization › Offline Submission**.

## Known limits

- Anonymous users can't submit offline, and public forms can't be filled in offline.
- Everything waiting is stored in the browser on that device. Logging out deletes it, including drafts and submissions waiting to sync.
- The **Offline** tab shows only the submissions from the device you are using.
- There is no manual retry for a submission that has used up its tries.
- Drafts on the server can't be opened offline.

## Next steps

- [Set up the offline services (self-hosted)](./set-up-offline-services.md)
- [Turn on offline submission for your organization](./turn-on-offline-submission.md)
- [Allow a form to be submitted offline](./allow-offline-on-a-form.md)
- [Take forms with you offline](./take-forms-offline.md)
- [Fill in a form without a connection](./fill-in-forms-offline.md)
- [Sync your submissions and fix problems](./sync-offline-submissions.md)
- [Sign in and log out with unsent work](./sign-in-and-log-out.md)
- [Send offline submissions through the API](./offline-submissions-api.md)
