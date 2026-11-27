---
title: Bring an existing form up to date with your organization's content
sidebar_label: Bring a form up to date
sidebar_position: 70
description: Add required governed content a form is missing so you can publish it, and take retired content off a form by saving it.
actions: [governed-content.publish-check, governed-content.retired-on-form]
---

# Bring an existing form up to date with your organization's content

When your organization's library changes, existing forms in formsflow.ai don't change with it. A form can be missing a required notice, or still show wording that's been retired. Bring the form up to date so the workflow it starts collects data with the right wording in place.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**
- A form exists. You made it with Create a new form, Create a new form using AI, or Import an existing form (see the forms documentation).
- Your organization has created governed content blocks. See [Create a governed content block](./create-a-governed-content-block.md).
- To change a published form, you unpublish it first. A published form can't be saved.

## Why a form can be missing required content

A form misses required content when:

- it was created before the required block existed. Every existing form is in this state after a new required block is created.
- a block it doesn't carry was changed from optional to required.
- it was imported with **Upload an existing form**.
- it was saved through the REST API without the block.

**Publish** stays disabled while a form is missing required content.

## Add missing required content

1. Go to **Build › Forms ›** *your form*.
2. If the form is published, unpublish it. The check shows only on unpublished forms.
3. Find the warning banner above the page header. It starts **Required content is missing from this form.** The banner gives the same reason for every form, which may not be why yours is missing it.
4. Select **Add it**. formsflow adds the missing blocks at the end of the form and opens the publish confirmation.
5. Select **Publish This Form** to save and publish the form, or **Cancel** to keep working on it first.

If you select **Cancel**, the added blocks stay on the form as an unsaved change and the banner goes away. Move the blocks where you want them in the **Builder**, select **Save**, and publish as usual.

The added blocks go at the end of the form, which can put them below the **Submit** button. On a wizard form whose last component is a page, they go on that last page. See [Place required content on a new form](./place-required-content-on-a-new-form.md#move-a-governed-block) to move them.

## Take retired content off a form

When your organization retires a block, formsflow removes it from a form the next time the form is saved. There's nothing to remove by hand.

1. Go to **Build › Forms ›** *your form*.
2. If the form is published, unpublish it.
3. Make your changes to the form.
4. Select **Save**. **Save** is available only when the form has unsaved changes.
5. Publish the form again if it should be live.

Until the form is saved, the builder shows the retired block like any other governed block, and the **Content** tab doesn't mention it. formsflow doesn't list which forms still carry a retired block.

## Check that it worked

- Missing required content: the banner no longer shows, and the required blocks are on the form with their **Governed** strip. If you selected **Publish This Form**, the form is saved and published.
- Retired content: after you save, the retired block is no longer in the builder.

## Things to know

- The banner shows only to users who can manage forms.
- Required blocks that you add from the banner use the library's current wording.
- Saving a form never adds missing required content. Only **Add it** does.

## Next step

[Check a form's governed content through the API](./check-governed-content-through-the-api.md)
