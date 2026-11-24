---
title: Set up the offline services (self-hosted)
sidebar_label: Set up the offline services (self-hosted)
sidebar_position: 10
description: Deploy and turn on the services that receive offline submissions, so organizations on your self-hosted installation can use offline forms.
actions: [offline.configure-deployment]
---

# Set up the offline services (self-hosted)

:::info Beta
Offline form submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

Before anyone can submit forms offline on a self-hosted formsflow.ai installation, you deploy the services that receive those submissions and turn the feature on. When you're done, organization administrators can turn on offline submission for their organization. On SaaS, this setup is done for you, so skip this page.

## Before you start

- Access: server access to your installation, with permission to change its deployment configuration.
- Edition: Go, Professional or Enterprise.
- Deployment: self-hosted.

## What you deploy

Offline submissions come in through their own path, apart from the web app's normal calls to the API:

- Envoy edge: the entry point for every offline submission. It checks that the request comes from a signed-in user and from the formsflow web app, and turns away anything too large.
- Offline bridge: checks each submission is readable and complete, puts it in the queue and tells the device it was received. It also answers the device's status checks.
- NATS queue: holds submissions until the worker takes them. Its contents are encrypted on disk.
- Worker: saves each submission as an online submission would be saved, then starts the form's workflow on the submitter's behalf. If something fails, it tries again for up to 24 hours.
- MinIO storage: holds submissions too large for the queue and submissions that arrived while the queue was unavailable. Its contents are not encrypted on disk.

An optional monitoring profile, `offline-viewers`, adds tools to look at the queue.

## Deploy the offline services

1. Create a Keycloak client for the worker.
2. Generate a signing key pair for the worker. The worker uses it to act on the submitter's behalf.
3. Set the NATS and MinIO credentials.
4. Set `CAMUNDA_BPM_HISTORY_LEVEL` to `audit` or higher on the BPM. The worker uses the workflow history to make sure a workflow can't start twice for the same submission.
5. If you run several BPM instances, set `OFFLINE_REPLAY_REDIS_URL`.
6. Start the services with the `offline-queue` compose profile.

## Turn on offline submission

1. On the API, set `OFFLINE_ENABLED=true`.
2. On the web app, set `REACT_APP_OFFLINE_ENABLED=true`.
3. On the web app, set `REACT_APP_OFFLINE_EDGE_URL` to the address devices use to reach the Envoy edge.
4. Restart the API and the web app.

## Turn on automatic sync (optional)

Without this, every submitter's device asks before it syncs, and submitters can't change that.

1. On the API, set `OFFLINE_AUTO_SYNC_ENABLED=true`.
2. On the web app, set `REACT_APP_OFFLINE_AUTO_SYNC_ENABLED=true`.
3. Restart the API and the web app.

## Check that it worked

Sign in as an organization administrator and go to **Manage › Organization**. The **Offline Submission** section is shown. If automatic sync is turned on for the installation, the section also shows the automatic sync setting.

## Things to know

- Offline submission stays off for each organization until an administrator turns it on. See [Turn on offline submission for your organization](./turn-on-offline-submission.md).
- Taking bundles offline needs the installation's offline bundles setting as well.
