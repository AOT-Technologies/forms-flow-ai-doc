---
title: formsflow.ai 8.4 user guide
sidebar_label: Overview
sidebar_position: 0
description: Task-based guides for the features new in formsflow.ai 8.4, for the people who build forms and workflows and the people who fill them in.
slug: /
---

import DocCardList from '@theme/DocCardList';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

export const FeatureCards = () => {
  const sidebar = useDocsSidebar();
  const items = (sidebar?.items ?? []).filter((item) => item.type === 'category');
  return items.length ? <DocCardList items={items} /> : null;
};

# formsflow.ai 8.4 user guide

This guide covers the features new in formsflow.ai 8.4. Each section starts with what the feature changes in your process, walks through the tasks one at a time, and ends with a reference page that lists every action, the permission it needs, and where to find it.

## How to read these pages

- **Permissions** are named as they appear on the role editor in **Manage › Roles**. You can do something if any of your roles grants the permission.
- **Editions and deployment** are listed on each feature's reference page. On a self-hosted installation, an administrator may need to switch a feature on in the deployment before it shows in the app.
- Features marked **beta** work, but may change in a later release.

## Features in this version

<FeatureCards />

This guide grows with each release. For installation, and for features from earlier versions, use the version menus at the top of the page.
