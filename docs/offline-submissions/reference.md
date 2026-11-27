---
title: "Offline form submissions: reference"
sidebar_label: Reference
sidebar_position: 90
description: "Every offline form submissions action in formsflow.ai 8.4: the permission it needs, where to find it, and which editions include it."
generated: true
---

# Offline form submissions: reference

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

This page lists every offline form submissions action in formsflow.ai 8.4, the permission each one needs, and where to find it.

## Availability

- **Editions:** Go, Professional, Enterprise
- **Deployment:** SaaS and self-hosted. Self-hosted only: deploy and configure the offline services (self-hosted)

## Actions and permissions

Permissions are named as they appear on the role editor in **Manage › Roles**. A user can do an action if any of their roles grants the permission.

| What you want to do | Permission needed | Where to find it | Available through |
| --- | --- | --- | --- |
| Deploy and configure the offline services (self-hosted) | Server access to your installation (self-hosted) | — | Deployment configuration |
| Turn offline submission on or off for your organization | Manage › Organization (Billing) | Manage › Organization › Offline Submission | formsflow.ai web app, REST API |
| Choose whether submissions sync automatically by default | Manage › Organization (Billing) | Manage › Organization › Offline Submission › Automatic sync | formsflow.ai web app, REST API |
| Allow offline submissions on a form | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Form › Settings › Form Permissions › Who Can Create Submissions | formsflow.ai web app, REST API |
| Preview how a form works offline | Design › Manage forms & flows you create and that are shared with you | Build › Forms › &lt;form&gt; › Preview › Offline | formsflow.ai web app |
| Make a form available offline | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Forms › &lt;form row&gt; › Submit ▾ › Make available offline | formsflow.ai web app |
| Remove a form from this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Forms › &lt;form row&gt; › Submit ▾ › Remove from offline; or Submit › Offline › Carrying › Remove | formsflow.ai web app |
| Turn offline mode on or off | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Offline mode | formsflow.ai web app |
| Fill in a form and save it on this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Forms › &lt;form taken offline&gt; › Save to offline | formsflow.ai web app |
| Save a submission on this device after a failed submit | Submit › Manage submissions (create, save drafts, resubmit) | Form › Submit (no answer from the server) › Save to offline | formsflow.ai web app |
| Save a draft on this device | Submit › Manage submissions (create, save drafts, resubmit) | Form (offline) › Save draft | formsflow.ai web app |
| Continue a draft saved on this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Drafts on this device › Continue; or Submit › Forms › &lt;form row&gt; › Submit ▾ › View Submissions › Continue | formsflow.ai web app |
| Delete a draft saved on this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Drafts on this device › Delete | formsflow.ai web app |
| See what is waiting, syncing and sent | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline | formsflow.ai web app |
| Sync waiting submissions now | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Waiting to sync › Sync now; or the 'back online' banner › Sync now | formsflow.ai web app |
| Change when this device syncs | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Sync: … › Change (split button) | formsflow.ai web app |
| Open a submission that needs attention | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Needs attention › Open | formsflow.ai web app |
| Finish a submission that came back incomplete | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Needs attention › Open | formsflow.ai web app |
| View a submission the server refused | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Needs attention › Open (refused) | formsflow.ai web app |
| Log out with unsent work on this device | Any signed-in user | Sidebar › Logout | formsflow.ai web app |
| Sign in again after your sign-in expires | Any signed-in user | Banner › Sign in | formsflow.ai web app |
| Send offline submissions and check their status through the API | Submit › Manage submissions (create, save drafts, resubmit) | — | REST API |

## Terms

**Carrying**
: The forms saved on your device so you can open and fill them in without a connection. You carry a form after you select Make available offline, and it stays on the device until you remove it.

**Offline mode**
: The state where formsflow works only with the forms you carry. It turns on by itself when formsflow can't reach the server, and off again when the connection returns. You can also turn it on yourself before you go somewhere with a poor connection; then it stays on until you turn it off or log out.

**Sync**
: How your device sends what is waiting on it to formsflow. Depending on the sync mode, it happens on its own when the connection returns, or when you select Sync now.

**Sent**
: A submission is sent once formsflow has received it. The server then saves it and starts the form's workflow on the submitter's behalf.

**Waiting to sync**
: Submissions saved on this device that formsflow hasn't received yet, including ones the device is still retrying.

**Needs attention**
: Submissions that couldn't get through on their own: the server refused them, they came back incomplete, or the form changed after they were filled in. Each one needs you to open it.

**Incomplete submission**
: A submission saved offline while a required question was hidden because it needed a connection. You answer those questions online and submit it again.

**Refused submission**
: A submission the server won't save as it is. You can view its answers, and Contact support opens an email to support with its details.

**Draft on this device**
: A draft saved while working offline. It stays only on this device and never becomes a draft on the server. Logging out or clearing your browser data deletes it.
