---
sidebar_position: 8
slug: /faq
---

# FAQ

This section answers common questions about how formsflow.ai works and how to configure it for your needs.

## Architecture

**Do Form.io, Camunda, and Redash work together natively?**  
Yes. formsflow.ai integrates Form.io for creating and storing forms, Camunda for orchestrating workflows, and Redash for analytics dashboards. Each component communicates over REST to deliver a unified platform.

**How does Camunda retrieve submission data from forms?**  
When a user submits a form, Form.io saves the data in its database. Camunda then retrieves that data using Form.io’s REST API to start a workflow instance based on the submission. 

**Can I return a form to the submitter to request more information after initial submission?**  
Yes. You can configure a user task in the workflow that returns the form to the original submitter. The form will appear again in their **Submission** section, allowing them to add the required details before proceeding.

**How do I customize the response to users after they complete a form?**  
Design a notification task in your Camunda workflow. Within that task, you can define email templates to send custom messages. SMS notifications are not available by default but can be added through a custom extension.

**Can I use a database other than those packaged with formsflow.ai (for example, Microsoft SQL Server)?**  
Yes. Starting with version 5.0.0, formsflow.ai supports a form adapter feature. You can push submission data to a custom REST endpoint, which then integrates with any database you choose. Some custom work may be required to connect to non-default databases.

**Can I embed formsflow.ai into my own website?**  
You can [embed](../Features/Forms-hybrid-embedding.md) individual forms for anonymous or authenticated use. However, the full portal experience (with workflows and dashboards) requires its own application instance.

## User Interface

**Does the user interface support multiple languages?**  
Yes. All front-end text can be translated by supplying the appropriate localization files.

**Can I customize the look and feel of the interface?**  
Yes. You have full control over [theming](../Features/Custom%20Theme.md) and styles at the code level.

**Are public-facing forms available?**  
Yes, they are called anonymous forms.

## Workflow (Camunda)

**Do I need to install a separate Camunda modeller?**  
No. formsflow.ai includes a built-in BPMN modeller. You can create, import, edit, and publish workflows directly within the platform.

**Can I request additional data from users during a workflow step?**  
Yes. You can add a user task that returns the form to the submitter to collect more information before moving on to the next step.

## Enterprise Subscriptions

**How do I obtain enterprise licenses for Form.io and Camunda?**  
Enterprise subscriptions must be purchased directly from Form.io and Camunda at this time. We plan to streamline this process in future releases.

## Security and Authentication

**Where are user accounts and roles stored?**  
Keycloak manages all user identities, single sign-on, and role-based access.

**If we have an in-house identity system, do we need to integrate it with formsflow.ai?**  
Yes. Keycloak must be configured to work with your identity provider. It must support SAML, OpenID Connect, or OAuth2 for successful integration.

**Do users have to log in to submit a form?**  
By default, yes. To allow anonymous submissions, enable the “anonymous forms” option in the form settings.

## Deployment

**Can I deploy formsflow.ai on my own infrastructure?**  
Yes. You can install formsflow.ai on any public or private cloud, or on-premise. Docker and Kubernetes manifest files are provided in the repository to simplify deployment.

## Customizations

**Can I add custom JavaScript code to forms?**  
Yes. Use the form builder’s custom script feature to run JavaScript on form events.

**Can I create multi-page forms?**  
Yes. The form builder supports multi-page layouts through configuration settings.

## Licensing

**Is formsflow.ai free to use?**  
Yes. The core platform is open source and free to use. Enterprise support and premium features are available by subscription.