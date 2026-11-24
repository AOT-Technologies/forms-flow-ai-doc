---
title: Send offline submissions through the API
sidebar_label: Send offline submissions through the API
sidebar_position: 80
description: Send submissions that were filled in offline and check whether they went through, using the REST API or the offline service.
actions: [offline.submit-api]
---

# Send offline submissions through the API

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

If you build your own client that collects forms without a connection, you can send those submissions to formsflow.ai and check whether each one went through. Each submission is saved exactly once and starts the form's workflow, the same as a submission from the web app.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- Offline submission is turned on for your organization. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).
- Edition: Go, Professional or Enterprise.

## Choose an endpoint

There are two ways in:

- Offline service: the path the formsflow web app uses. Requests go to the Envoy edge, which passes them to the offline bridge.
  - `POST /offline/v1/submissions` sends submissions.
  - `POST /offline/v1/status` checks their status.
  - The same calls are available over gRPC as `Submit` and `GetStatus`.
- REST API: the older path, still available on the formsflow API.
  - `POST /application/offline-submit` sends one submission.
  - `POST /application/offline-submit/batch` sends several.
  - `POST /application/offline-submit/status` checks their status.

## Send submissions and check their status

1. Give each submission its own idempotency key. If you send the same submission twice with the same key, it is saved only once.
2. Send the submissions, up to 10 forms per request.
3. Read the result for each submission.
4. For submissions that aren't done yet, send their keys to the status endpoint, up to 100 keys per check.

## Check that it worked

Each result tells you where the submission is:

| Code | Meaning |
| --- | --- |
| 201 | Done: the submission was saved. |
| 200 | Already received. |
| 503 | Try again later. Keep the submission and send it again. |
| 422 | Failed, or needs review. |
| 409 | Still in progress, or the key was already used for a different submission. |
| 403 | Offline submission is turned off. |

## Things to know

- A status check shows only your own keys.
- Up to 10 forms per request and up to 100 keys per status check.
