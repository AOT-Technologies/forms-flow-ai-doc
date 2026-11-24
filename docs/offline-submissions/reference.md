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
| Make a form available offline | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Forms › &lt;form row&gt; › Submit ▾ › Make available offline | formsflow.ai web app, REST API |
| Remove a form from this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Forms › &lt;form row&gt; › Submit ▾ › Remove from offline; or Submit › Offline › Carrying › Remove | formsflow.ai web app |
| Turn offline mode on or off | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Offline mode | formsflow.ai web app |
| Fill in a form and save it on this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Forms › &lt;form taken offline&gt; › Save to offline | formsflow.ai web app |
| Save a submission on this device after a failed submit | Submit › Manage submissions (create, save drafts, resubmit) | Form › Submit (no answer from the server) › Save to offline | formsflow.ai web app |
| Save a draft on this device | Submit › Manage submissions (create, save drafts, resubmit) | Form (offline) › Save draft | formsflow.ai web app |
| Continue a draft saved on this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Drafts on this device › Continue; or Submit › &lt;form&gt; › Continue | formsflow.ai web app |
| Delete a draft saved on this device | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Drafts on this device › Delete | formsflow.ai web app |
| See what is waiting, syncing and sent | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline | formsflow.ai web app |
| Sync waiting submissions now | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Waiting to sync › Sync now; or the 'back online' banner › Sync now | formsflow.ai web app, REST API |
| Change when this device syncs | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Sync: … › Change | formsflow.ai web app |
| Open a submission that needs attention | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Needs attention › Open | formsflow.ai web app |
| Finish a submission that came back incomplete | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Needs attention › Open | formsflow.ai web app |
| View a submission the server refused | Submit › Manage submissions (create, save drafts, resubmit) | Submit › Offline › Needs attention › Open (refused) | formsflow.ai web app |
| Log out with unsent work on this device | Any signed-in user | Sidebar › Logout | formsflow.ai web app |
| Sign in again after your sign-in expires | Any signed-in user | Banner › Sign in | formsflow.ai web app |
| Send offline submissions and check their status through the API | Submit › Manage submissions (create, save drafts, resubmit) | — | REST API |

## Terms

**Service worker**
: A small helper script the browser keeps alongside the formsflow web app. It saves a copy of the app's own files: the page layout, scripts and styles. That lets the app open even with no connection. It doesn't store any form answers, and it never saves calls to the server. (The answers and drafts sit in the browser's own storage, IndexedDB, which is separate.)

**Envoy edge**
: The front door for submissions that were saved offline. Every one of them comes in through it. It checks that the request comes from someone who is signed in and from the formsflow web app, and turns away anything too large. It then passes the submission inside. "Envoy" is the name of the open-source software it's built on, and "edge" means it sits at the boundary between the internet and the formsflow servers.

**Offline bridge**
: The reception desk just behind the front door. It takes each submission and checks it is readable and complete. It puts it in the queue and tells the device "received". It doesn't save the form itself. It also answers the device when the device asks "did my submission go through yet?"

**NATS queue**
: A waiting line for submissions. The bridge drops each submission into it, and the worker takes them out one at a time. If the worker is busy or something downstream is down, the submissions wait safely here instead of being lost. NATS is the name of the open-source queueing software, and the queue's contents are encrypted on disk.

**Worker**
: The part that does the real work. It takes a submission from the queue and saves it in formsflow exactly as an online submission would be saved. Then it starts the workflow on the submitter's behalf. If something fails, it tries again later, for up to 24 hours. It runs in the background on the server, with no screen of its own.

**MinIO storage**
: An overflow store for submissions that can't sit in the queue. It keeps two kinds: submissions too large for the queue, which only takes messages up to about 1 MB; and submissions that arrived while the queue was unavailable. These are kept here until the worker can handle them. MinIO is open-source software that stores files the way Amazon S3 does. Unlike the queue, its contents are not encrypted on disk.
