---
title: Send offline submissions through the API
sidebar_label: Send offline submissions through the API
sidebar_position: 80
description: Send submissions that were filled in offline and check whether they went through, using the offline service or the REST API.
actions: [offline.submit-api]
---

# Send offline submissions through the API

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

If you build your own client that collects forms without a connection, you can send those submissions to formsflow.ai and check whether each one went through. A key on each submission makes sure it is saved only once, even if you send it again. Each saved submission starts the form's workflow, the same as one from the web app.

## Before you start

- Permission: **Submit › Manage submissions (create, save drafts, resubmit)**
- Offline submission is turned on for your organization. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).
- Edition: Go, Professional or Enterprise.

## Choose an endpoint

There are two ways in.

The offline service is the path the formsflow web app uses. Requests go to the Envoy edge, the front door for offline submissions, which passes them to the offline bridge. The bridge checks each submission, queues it and answers "received".

- `POST /offline/v1/submissions` sends submissions.
- `POST /offline/v1/status` checks their status.
- The same calls are available over gRPC as `Submit` and `GetStatus`.
- Field names: `formSubmissionKey`, `schemaId` (the form) and `formSubmissionData`.
- The token's audience must be the web client.

The REST API is the older path, and it's still available. Requests go straight to the formsflow API, not through the Envoy edge.

- `POST /application/offline-submit` sends one submission.
- `POST /application/offline-submit/batch` sends several.
- `POST /application/offline-submit/status` checks their status.
- Field names: `idempotencyKey`, `formId` and `data`.

## Send submissions and check their status

1. Give each submission its own idempotency key, 8 to 64 characters long. If you send the same submission again with the same key, it is saved only once.
2. Send the submissions, up to 10 forms per request.
3. Read the result for each submission.
4. For submissions that aren't done yet, send their keys to the status endpoint, up to 100 keys per check.

## Check that it worked

### Offline service

The request returns 200, with `received`, `retry` or `failed` for each form. For the whole request:

| Code | Meaning |
| --- | --- |
| 400 | The request is invalid. |
| 401 | Sign in again. |
| 403 | The user may not submit forms. |
| 413 | The request is too large. |
| 503 | The sign-in or the status couldn't be checked right now. Try again later. |

### REST API, single submit

| Code | Meaning |
| --- | --- |
| 201 | Saved. |
| 200 | Already saved. The response is the first result. |
| 400 | Invalid. |
| 401 | Sign in again, or the user may not submit forms. |
| 403 | Offline submission is turned off for the organization, or isn't turned on for the installation. Keep the submission waiting and send it later. This isn't a failed try. |
| 409 | Still in progress, or the key belongs to another user, form or set of answers. |
| 422 | Needs the user. |
| 503 | Try again later. |

### REST API, batch and status

- Batch returns 200, with each form's code in `httpStatus`.
- Status returns `done`, `processing`, `failed`, `retry` or `unknown` for each key.

## Things to know

- A status check shows only your own keys.
- Up to 10 forms per request and up to 100 keys per status check.
- Once the offline service has received a submission, the worker retries it for up to 24 hours by default (`OFFLINE_QUEUE_MAX_HOURS`), counted from its first failed try.
- While offline submission is off for the organization, the offline service still accepts submissions and holds them for up to 6 days by default (`OFFLINE_QUEUE_MAX_WAIT_DAYS`), counted from when it received them. A status check answers `disabled` while they wait. After that, they fail. The REST API refuses them with 403 instead.
