---
title: Check a form's governed content through the API
sidebar_label: Check governed content through the API
sidebar_position: 80
description: Use the formsflow.ai REST API to list the governed content a form carries, spot outdated copies, and find required blocks it's missing.
actions: [governed-content.form-status]
---

# Check a form's governed content through the API

Use the formsflow.ai REST API to audit a form: which governed content blocks it carries, whether each copy is the latest version of the block, and which required blocks it's missing. The web app doesn't show this view.

## Before you start

- Permission: any one of **Design › View forms & flows**, **Design › Manage forms & flows you create and that are shared with you**, or **Manage › Governed content**. The admin role can also call it.
- A form exists. You made it with Create a new form, Create a new form using AI, or Import an existing form (see the forms documentation).
- You have the form's parent form ID and an access token for the formsflow API. On multi-tenant installs, the token must carry a `tenantKey` claim.

## Get a form's governed content status

1. Send a `GET` request to `/governed-content/forms/{parent_form_id}` on the formsflow API, with your access token.
2. Read the response:
   - `parentFormId`: the form you asked about.
   - `attached`: the blocks the form carries. Each entry has `governedContentId`, `name`, `requirement`, `componentKey`, `contentVersion` (the version on the form), `latestVersion` (the library's current version) and `outdated`, which is `true` when a newer version exists.
   - `missingRequired`: the active required blocks the form doesn't carry, as full block records.

## Check that it worked

The response contains `attached` and `missingRequired`. An empty `missingRequired` list means the form carried every required block when it was last saved through formsflow.

## How to read the results

Both lists come from a record formsflow writes each time the form is saved through formsflow, not from the form itself. So:

- Imported forms, and forms not saved since a block changed, aren't reflected until they're next saved.
- A retired block leaves `attached` as soon as it's retired, even though it stays on the form until the form is saved.
- The endpoint doesn't check that the form exists. An unknown ID returns every active required block in `missingRequired`. Confirm the parent form ID before you act on the result.

A block's version goes up when its heading, body, owner or policy reference changes. Changing only its name or type doesn't change the version.

## Read the library through the API

`GET /governed-content` lists the library's blocks, and `GET /governed-content/{id}` returns one block. Besides **Manage › Governed content**, both accept **Design › View forms & flows** and **Design › Manage forms & flows you create and that are shared with you**.

## Things to know

- The web app doesn't use the form status endpoint, so there's no matching screen.
- To add missing required content, a designer opens the form in the web app. See [Bring an existing form up to date with your organization's content](./bring-a-form-up-to-date.md).
- Publishing a form through the REST API doesn't check for required content.
