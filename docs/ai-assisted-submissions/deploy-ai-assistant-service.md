---
title: Deploy and connect the AI assistant service
sidebar_label: Deploy the AI assistant service
sidebar_position: 10
description: Run the AI assistant service on a self-hosted installation and connect the formsflow.ai web app to it.
actions: [ai-submissions.configure-service]
---

# Deploy and connect the AI assistant service

<span className="badge badge--secondary">Added in 8.4</span>

:::info Beta
AI-assisted submissions is in beta in formsflow.ai 8.4. Behaviour may change in a later release.
:::

On a self-hosted installation, the AI assistant needs its own service running before anyone in your organization can use it. When you're done, the web app can reach the service, and form designers can turn the assistant on for their forms.

On SaaS, this is handled for you. Skip to [Turn on AI assistance for your organization](./turn-on-ai-for-your-organization.md).

## Before you start

- Permission: server access to your installation (infrastructure access, not a formsflow role)
- Edition: Go, Professional or Enterprise
- Deployment: self-hosted
- A PostgreSQL database with the pgvector extension, for the service's own use
- An S3 bucket, for the documents designers upload
- An API key for the model provider the service uses

## Run the AI assistant service

1. Deploy the `forms-flow-ai-assistant` service with your other formsflow services.
2. Give it its own PostgreSQL database with the pgvector extension. Don't share the database the other services use.
3. Point it at your S3 bucket. Keep the bucket private.
4. Give it your model provider API key.
5. Start the service. It listens on port 5007.

## Connect the web app

1. Decide how browsers reach the service:
   - directly on port 5007, or
   - through nginx at the `/aiapi/` path on your web host.
2. Set these environment variables on the web app:
   - `REACT_APP_SUBMISSION_AI_ASSISTANT_ENABLED=true`
   - `REACT_APP_AI_ASSISTANT_URL` to the address from step 1, for example `https://your-web-host/aiapi`
3. Redeploy the web app so it picks up the new values.

## Check that it worked

Open any form in **Build › Forms** and go to its **Context** tab. You see the switch **AI form submissions assistance is OFF for this form**.

On a multi-tenant installation, the tab shows "AI forms submission assistance is not available for your organization. Please contact your Admin to request access." until an organization administrator turns AI assistance on. That's expected: continue with [Turn on AI assistance for your organization](./turn-on-ai-for-your-organization.md).

## Things to know

- On a single-tenant installation, setting `REACT_APP_SUBMISSION_AI_ASSISTANT_ENABLED=true` is enough: AI assistance is treated as on for the organization.
- On a multi-tenant installation, each organization also has to switch AI assistance on.
- Reaching the service through nginx at `/aiapi/` keeps port 5007 private and serves the assistant over the same host and TLS as the web app.
