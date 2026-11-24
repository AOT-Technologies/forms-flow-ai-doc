---
title: Add missing required content before publishing
sidebar_label: Add missing required content
sidebar_position: 50
description: Add your organization's required governed content to a form that doesn't carry it, so you can publish the form.
actions: [governed-content.publish-check]
---

# Add missing required content before publishing

In formsflow.ai, **Publish** stays disabled on a form that's missing your organization's required wording. When a form lacks a required governed content block, you add it in one step, and the form publishes with the approved notices in place.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- A form exists. You created it with Create a new form, Create a new form using AI, or Import an existing form (see the forms documentation).
- Your organization has at least one required block. See [Create a governed content block](./create-a-governed-content-block.md).
- The form is unpublished. If it's published, unpublish it first to see the alert.

## Why a form is missing required content

A form can be missing required content when:

- it was created before the required block existed. Every existing form is in this state after a new required block is created.
- it was changed outside the builder.

## Add the missing content

1. Go to **Build › Forms ›** *your form*.
2. Read the alert in the header: **Required content is missing from this form. This form was changed outside the builder. Adding it restores the content and publishes.** The wording is the same whichever reason applies.
3. Select **Add it**.

**Add it** adds the missing blocks, saves the form, and publishes it in one step.

## Check that it worked

The alert no longer shows, and the form is published.

## Things to know

- **Publish** stays disabled while required content is missing.
- The alert shows only on unpublished forms.
