---
title: Give the assistant knowledge about your form
sidebar_label: Give the assistant knowledge
sidebar_position: 40
description: Add context text and reference documents that the AI assistant uses to answer submitters' questions about your form.
actions: [ai-submissions.edit-context-text, ai-submissions.upload-document, ai-submissions.rename-document, ai-submissions.delete-document, ai-submissions.download-document]
---

# Give the assistant knowledge about your form

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
AI-assisted submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

In formsflow.ai, the AI assistant answers only from what you give it: the form's context text and the documents you upload. Good knowledge means submitters get the right answer before they submit, so fewer submissions come back through the workflow for correction.

## Before you start

- Permission: **Design › Manage forms & flows you create and that are shared with you**. To download documents from the **Context** tab only, **Design › View forms & flows** is enough.
- AI assistance is on for the form. See [Turn on the AI assistant for a form](./turn-on-ai-assistant-for-a-form.md).
- The form has been saved at least once.
- Edition: Go, Professional or Enterprise

## Add or edit context text

1. Go to **Build › Forms** and open your form.
2. Select the **Form** tab, then **Context**.
3. In **Context Text**, enter guidance that helps someone complete the form: who it's for, what each section means, what to have ready.
4. Select **Save**.

You can enter up to 20,000 characters. The editor doesn't count them for you.

## Upload context documents

1. On the **Context** tab, in **Context Documents**, select **Upload file(s)**.
2. Choose one or more files. You can upload PDF, DOCX, PPTX, XLSX, CSV and TXT files, up to 10 MB each.
3. Wait while each document is processed. Its status updates every 3 seconds.

## Give a document an alternative name

Submitters see a document's name in the source chips under an answer. If the file name isn't meaningful to them, give it an alternative name.

1. In **Context Documents**, select the **Edit** button next to the document.
2. In **Alternative Name**, enter the name submitters should see. You can use up to 100 characters.
3. Select **Update**.

## Delete a document

1. In **Context Documents**, select the **Delete** button next to the document.
2. In the **Delete this document?** dialog, select **Delete document**.

The document is removed from the assistant's knowledge. This can't be undone. If no other form uses the document, it's deleted.

## Download a document

In **Context Documents**, select the **Download** button next to the document.

## Check that it worked

Each uploaded document appears in the **Context Documents** list under its alternative name, if it has one, or its file name. Once the form is published, ask the assistant a question your documents answer and check the source chips under the answer.

## Things to know

- Save the form before you add context text. Text entered on a form that has never been saved is lost.
- If you select **Upload file(s)** on a form that hasn't been saved, formsflow saves the form first. Select **Upload file(s)** again to choose your files.
- Context text is saved when you save the form and is shared by every version of the form.
- Web links in the context text are kept as plain text. The assistant doesn't open them.
- Scanned pages can't be read, because there's no text recognition (OCR). Upload documents that contain real text.
- The assistant uses about the first 50,000 tokens of text extracted from each document.
- Only uploaded documents are cited as sources, never the context text.
- Submitters can download a cited document only when the form allows it. See [Let submitters download cited documents](./turn-on-ai-assistant-for-a-form.md#let-submitters-download-cited-documents).
