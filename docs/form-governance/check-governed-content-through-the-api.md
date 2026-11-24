---
title: Check a form's governed content through the API
sidebar_label: Check governed content through the API
sidebar_position: 60
description: Use the formsflow.ai REST API to list the governed content blocks a form carries and the required blocks it's missing.
actions: [governed-content.form-status]
---

# Check a form's governed content through the API

Use the formsflow.ai REST API to audit a form: which governed content blocks it carries, whether each one is the latest version, and which required blocks it's missing. The web app doesn't show this view.

## Before you start

- Permission: any one of **Design › View forms & flows**, **Design › Manage forms & flows you create and that are shared with you**, or **Manage › Governed content**
- A form exists. You created it with Create a new form, Create a new form using AI, or Import an existing form (see the forms documentation).
- You have the form's parent form ID and an access token for the formsflow API.

## Get a form's governed content status

1. Send a `GET` request to `/governed-content/forms/{parent_form_id}` on the formsflow API, with your access token.
2. Read the response:
   - `attached`: the governed content blocks the form carries. Each has an `outdated` flag that is `true` when a newer version of the block exists.
   - `missingRequired`: the required blocks the form doesn't carry.

## Check that it worked

The response contains the `attached` and `missingRequired` lists. An empty `missingRequired` list means the form carries every required block.

## Things to know

- The web app doesn't use this endpoint, so there's no matching screen.
- To add missing required content, open the form in the web app. See [Add missing required content before publishing](./add-missing-required-content.md).
