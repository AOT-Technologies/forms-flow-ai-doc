---
sidebar_position: 3
---

# System Architecture

---

![system archetecture diagram](/img/formsflow-ai-components.png)


## Components

The components of the system are:

### formsflow.ai Web

Browser-based React integration web UI. Most of the day-to-day end-user and review tasks are performed from this application, built specifically to act as a common UI combining forms, workflow, and analytics functionality.

The web application is written as a [progressive web application](https://en.wikipedia.org/wiki/Progressive_web_application), with the potential for offline data entry. formsflow.ai web accesses the individual system component data through native APIs using OIDC or SAML access tokens.

### formsflow.ai Web Extension for Vue.js (optional)

There is a Vue.js-based web-user interface for easy integration of formsflow.ai into your existing user interface. This extension provides components for easily using Forms and Tasklist by installing it as an npm package.

- Check out the [formsflow-ai-extension repository](https://github.com/AOT-Technologies/forms-flow-ai-extensions/tree/master/camunda-formio-tasklist-vue)
- Install the package from [npm](https://www.npmjs.com/package/camunda-formio-tasklist-vue)

### Keycloak Identity and Access Management

formsflow.ai uses your existing Keycloak server, which provides a common identity and authorization management capability. The system provides default installation and provisioning of the Keycloak server for a local setup. However, you can set up your own Keycloak server and follow the provisioning steps [here](local_keycloaksetup).

### Form.io API

The REST interface to the form.io core. formsflow.ai uses a custom authentication flow with form.io to authenticate users into the system.

### Camunda Cockpit UI

The native admin interface to Camunda (bundled and unchanged). Use this to define task filters and troubleshoot workflow tasks as an admin.

### Nginx Web Server (optional)

Web server providing reverse-proxy redirection and SSL to components for remote deployments (bundled and configured).

### Redash Admin UI

The native admin interface to Redash (bundled and unchanged). Use this to build analytics dashboards.

### Redash API

The REST interface to the Redash core (bundled and unchanged).

### Web API

Python REST API providing business logic around the internal formsflow.ai Postgres database. This API is used extensively by the formsflow.ai web to synchronize, maintain state, extend functionality, and integrate between components.

### Admin API

Python REST API to provision tenants in a multi-tenanted environment.

### Documents API

Python REST API to generate and export form submission PDF reports.
