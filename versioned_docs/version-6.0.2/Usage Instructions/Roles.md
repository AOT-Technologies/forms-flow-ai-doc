---
sidebar_position: 6
---

# How To Use Formsflow.ai
---

## Using authorizations explained

Once a Designer has created and published applications for use in formsflow.ai, online applications can be submitted by end users (Clients) to access forms. Rest of the workflow is based on the workflow attached to the form.

We can broadly divide the actors or users involved as:

![Roles](/img/roles.png)

Based on the actors involved, the user, group, and role creation and management are performed in Keycloak by the Keycloak administrator.

---

## How To Configure User Roles with groups in formsflow.ai

1. Create Users
   Users are created in Keycloak by choosing the appropriate realm and navigating to the user menu

   ![Keycloak Users](/img/keycloak1.png)

2. Set User Credentials

   ![Keycloak Credentials](/img/keycloak2.png)

3. User Group Mapping

   ![Keycloak Group Mapping](/img/keycloak3.png)

## Using Roles for authorization

To use keycloak client with client roles for authorizations, below config map/secret entries needs to be updated with correct values:

1. KEYCLOAK_ENABLE_CLIENT_AUTH: true
2. KEYCLOAK_WEB_CLIENTID: `{project-unique-key}`-forms-flow-web (mentioned in next steps)
3. KEYCLOAK_CLIENTID: same value as KEYCLOAK_WEB_CLIENTID. This is kept separate to support multi tenancy.

### Keycloak clients and roles

3 keycloak clients needs to be created per project:

- `{project-unique-key}`-forms-flow-web: Create audience mapper to include the same audience in token.
- `{project-unique-key}`-forms-flow-bpm: (Service account) with audience mapper of `{project-unique-key}`-forms-flow-web and `{project-unique-key}`-forms-flow-bpm. The service account would need query-groups, query-clients, query-users, view-users roles under realm management.
- `{project-unique-key}`-forms-flow-analytics: with audience mapper of same client. This is needed only if analytics needs SSO authentication.

Default roles under `{project-unique-key}`-forms-flow-web. Any project specific roles has to be created under the same:

- formsflow-designer: For form and workflow designers.
- formsflow-client: For client users
- formsflow-reviewer: For reviewers
- formsflow-admin: For administrators
- camunda-admin: For workflow administrator