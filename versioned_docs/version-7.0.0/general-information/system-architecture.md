---
sidebar_position: 2
slug: /system-architecture
---

# System Architecture

The formsflow.ai platform uses a service oriented design to separate concerns, simplify maintenance, and allow each component to scale independently. Below is an overview of each component and its role in the overall solution.

![system archetecture diagram](/img/7.0.0/formsflow.svg)
 
## Web Application  
A *React* based client delivers the user interface for form design, submission, task review and dashboards. It uses a micro frontend architecture where each module is deployed independently and served from an S3 bucket, so you can update parts of the UI without redeploying the entire application. The web client communicates with backend services over REST and secures requests using OIDC tokens or API keys. It adapts automatically to desktops, tablets and mobile devices.

## Identity Service  
*Keycloak* provides authentication, single sign-on and role based authorization. It stores user credentials and manages sessions. By externalizing identity, you get a proven security framework that integrates with LDAP, social logins and custom identity providers.

## Form Engine  
The Form Engine is powered by *form.io* and provides a REST API for creating, submitting and managing forms. It stores form definitions and submission data in a document database. The engine validates input, enforces required fields and uses a custom authentication flow with Keycloak for secure access. By isolating form management you ensure data integrity and simplify auditing.

## Workflow Engine  
Based on *Camunda*, this service executes business processes defined in BPMN. It handles task assignment, decision logic, timers and event handling. Each form submission triggers a workflow instance. By isolating process execution, you can model complex approval chains, parallel tasks and exception paths without changing form logic.

## API Layer  
A *Python* based API layer routes requests from the web client to the appropriate backend service. It enforces global security policies, rate limits and request logging. Centralizing these concerns in a gateway reduces duplication and provides a single point for monitoring and alerting.

## Analytics Service  
This customized *Redash* application aggregates data from the form and workflow engines to generate reports and dashboards. It runs scheduled queries to calculate metrics such as submission volume, average processing time and bottleneck identification. Offering analytics as a separate service lets you tune queries and storage for large-scale reporting without affecting transaction performance.

## Document Service  
When users need a PDF output of a form submission, this *Python* based REST service applies templates and merges data to generate documents. It supports custom layouts, headers, footers and watermarks. Running document generation in its own process prevents slow rendering from blocking other operations.

## Admin Service  
The Admin API is a *Python* based REST service that manages tenant provisioning in multitenant deployments. This functionality enables rapid onboarding and isolation for multiple tenants within a single *formsflow.ai* environment.

---

Each component can be hosted independently or together depending on scale and operational needs. This modular approach lets you apply updates, allocate resources and troubleshoot issues at the component level, improving reliability and reducing downtime.
