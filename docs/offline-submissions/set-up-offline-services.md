---
title: Set up the offline services (self-hosted)
sidebar_label: Set up the offline services (self-hosted)
sidebar_position: 10
description: Deploy and configure the services that receive offline submissions, so organizations on your self-hosted installation can turn on offline forms.
actions: [offline.configure-deployment]
---

# Set up the offline services (self-hosted)

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Before anyone can submit forms offline on a self-hosted formsflow.ai installation, you deploy the services that receive those submissions and turn the feature on. When you're done, organization administrators can turn on offline submission for their organization, and each offline submission is saved and starts its workflow like any other. On SaaS, this setup is done for you, so skip this page.

## Before you start

- Access: server access to your installation, with permission to change its deployment configuration.
- Edition: Go, Professional or Enterprise.
- Deployment: self-hosted.
- A Keycloak realm where you can create a client.

## What you deploy

Submissions saved offline in the formsflow web app come in through their own path:

- Envoy edge: the front door for every submission saved offline in the web app. It checks that the request comes from a signed-in user and from the formsflow web app, and turns away anything too large. Then it passes the submission inside. Submissions sent through the REST API go straight to the formsflow API instead.
- Offline bridge: checks that each submission is readable and complete. It puts the submission in the queue and tells the device it was received. It also answers the device when it asks whether a submission has gone through. It doesn't save the form itself.
- NATS queue: a NATS JetStream queue that holds submissions until the worker takes them, 4 at a time by default. Its contents are encrypted on disk.
- Worker: takes each submission from the queue and saves it exactly as an online submission would be saved. Then it starts the form's workflow on the submitter's behalf. If something fails, it tries again for up to 24 hours by default, counted from its first failed try.
- MinIO storage: holds submissions too large for the queue (it takes messages up to about 1 MB) and submissions that arrived while the queue was unavailable. Its contents are not encrypted at rest.

The web app also uses a service worker, a script the browser keeps alongside the app. It saves the app's own files so the app can open with no connection. It doesn't store form answers. Those sit in the browser's own storage (IndexedDB).

An optional compose profile, `offline-viewers`, adds monitoring.

## Set the secrets and keys

1. Create a Keycloak client for the worker. Put its secret in `OFFLINE_WORKER_CLIENT_SECRET`.
2. Generate a signing key pair for the worker. Put the private key in `OFFLINE_WORKER_SIGNING_KEY` on the worker. Put the public key in `OFFLINE_WORKER_PUBLIC_KEY` on the API, the process gateway and the BPM.
3. Set the NATS and MinIO credentials.
4. Set `OFFLINE_NATS_JETSTREAM_KEY`. It encrypts the queue and is required.

:::warning
Keep `OFFLINE_NATS_JETSTREAM_KEY` safe and don't change it. If it's lost or changed, the forms in the queue can't be read.
:::

## Configure the BPM

1. Set `CAMUNDA_BPM_HISTORY_LEVEL` to `audit` or higher. This makes sure a workflow can't start twice for the same submission.
2. If the BPM already has a database, change the history level stored in that database too. Otherwise the BPM won't start.
3. If you run several process gateway or BPM instances, set `OFFLINE_REPLAY_REDIS_URL` on all of them.

## Deploy the offline services

1. Use the `offline-queue` compose profile to build the images and start the Envoy edge, offline bridge, worker, NATS queue and MinIO storage.
2. If you deploy outside compose:
   - Give the Envoy edge TLS certificates. `OFFLINE_EDGE_TLS` is `true` by default.
   - Set `OFFLINE_EDGE_ORIGINS` to include the web app's origin.
   - Behind a load balancer, set `OFFLINE_EDGE_TRUSTED_HOPS=1`.

## Turn on offline submission

1. On the API and the worker, set `OFFLINE_ENABLED=true`.
2. On the web app, set `REACT_APP_OFFLINE_ENABLED=true`.
3. On the web app, set `REACT_APP_OFFLINE_EDGE_URL` to the address devices use to reach the Envoy edge. Without it, offline forms stay off.
4. Restart the API, the worker and the web app.

In the compose `.env` file, you set these once, as `OFFLINE_ENABLED` and `OFFLINE_EDGE_URL`. The worker takes the API's settings.

## Turn on optional features

- Automatic sync: set `OFFLINE_AUTO_SYNC_ENABLED` on the API (`REACT_APP_OFFLINE_AUTO_SYNC_ENABLED` on the web app). Without it, every submitter's device asks before it syncs, and organizations and submitters can't change that.
- Custom submissions: if you use `CUSTOM_SUBMISSION_ENABLED`, also set `OFFLINE_CUSTOM_SUBMISSION_ENABLED`.
- Bundles: set `OFFLINE_BUNDLES_ENABLED` (`REACT_APP_OFFLINE_BUNDLES_ENABLED` on the web app) so submitters can take bundles offline.
- Support address: set `OFFLINE_SUPPORT_EMAIL` (`REACT_APP_OFFLINE_SUPPORT_EMAIL` on the web app) to choose where **Contact support** emails go. The default is support@formsflow.ai.

## Check that it worked

Sign in as an organization administrator and go to **Manage › Organization**. The **Offline Submission** section is shown. If you turned on automatic sync, the section also shows the **Automatic sync** setting. Seeing this section tells you the settings are on. It doesn't tell you whether devices can reach the Envoy edge.

## Things to know

- Offline submission stays off for each organization until an administrator turns it on.
- While an organization has offline submission off, the worker holds submissions it can't save yet for up to 6 days by default (`OFFLINE_QUEUE_MAX_WAIT_DAYS`), counted from when the server received them. After that they fail. This waiting doesn't count toward the retry time.
- The worker retries failed submissions for up to 24 hours by default (`OFFLINE_QUEUE_MAX_HOURS`), counted from its first failed try.
- MinIO deletes submissions after 8 days by default (`OFFLINE_STORE_KEEP_DAYS`) for those too large for the queue, and after 30 days (`OFFLINE_STORE_KEEP_PENDING_DAYS`) for those that arrived while the queue was unavailable.
- MinIO's contents aren't encrypted at rest. Protect its storage.

## Next step

[Turn on offline submission for your organization](./turn-on-offline-submission.md).
