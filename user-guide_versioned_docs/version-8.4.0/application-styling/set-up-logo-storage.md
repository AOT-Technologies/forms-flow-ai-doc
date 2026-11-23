---
title: Set up logo storage (self-hosted)
sidebar_label: Set up logo storage (self-hosted)
sidebar_position: 10
description: Configure the S3 bucket that formsflow.ai saves uploaded logos in, so administrators on your self-hosted installation can upload one.
actions: [app-styling.configure-logo-storage]
---

# Set up logo storage (self-hosted)

On a self-hosted formsflow.ai installation, an administrator can upload your organization's logo only after you give the formsflow API somewhere to store it. When you're done, logo upload is turned on in **Manage › Appearance**.

## Before you start

- Server access to your installation, and permission to change the formsflow API's environment variables.
- An S3 bucket, or an S3-compatible store, that the API can write to.
- A public URL that browsers can load the stored logos from, for example a CloudFront distribution in front of a private bucket.

The display name and button shape work without logo storage. Skip this page if you don't need a logo.

## How logo storage works

- One bucket holds the logos for every tenant, in a folder per tenant. On a single-tenant installation the folder is called `default`.
- The API writes to the bucket using the AWS role of the host it runs on, not access keys. On EKS that's IRSA or Pod Identity; on EC2 it's the instance profile.
- Browsers load the logo from the public base URL you set, not from the bucket directly.

## Give the API's role access to the bucket

1. Open the IAM role that the formsflow API runs under.
2. Allow `s3:PutObject` and `s3:DeleteObject` on `arn:aws:s3:::your-bucket/*/logo-*`, replacing `your-bucket` with your bucket's name.
3. If the API runs in containers on EC2, set the instance metadata hop limit to 2 so the containers can reach the instance role.

## Set the environment variables

Set these on the formsflow API service:

| Variable | Required | What to set |
| --- | --- | --- |
| `ASSETS_S3_BUCKET` | Yes | The bucket name. |
| `ASSETS_S3_PUBLIC_BASE_URL` | Yes | The base URL browsers use to load logos, for example your CloudFront URL. |
| `ASSETS_S3_REGION` | No | The bucket's AWS region, for example `us-east-1`. |
| `ASSETS_S3_ENDPOINT_URL` | No | Only for S3-compatible stores that aren't AWS: the store's URL as the API container sees it. |

1. Set `ASSETS_S3_BUCKET` and `ASSETS_S3_PUBLIC_BASE_URL`.
2. Set `ASSETS_S3_REGION` to your bucket's region.
3. Restart the formsflow API so it reads the new values.

## Check that it worked

1. Sign in as a user with **Manage › App styling** and go to **Manage › Appearance**.
2. Under **Logo**, choose a JPEG, PNG or GIF file.

If storage is set up, the file appears in a card with its name and a trash icon. If you see "Storage is not configured", one of the two required variables is missing or empty.

## Things to know

- Both `ASSETS_S3_BUCKET` and `ASSETS_S3_PUBLIC_BASE_URL` are empty by default, so logo upload is off until you set both. Setting only the bucket leaves upload off.
- Next: [Add or remove your organization's logo](./add-or-remove-your-logo.md).
