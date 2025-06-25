---
sidebar_position: 5
slug: /version-upgrades
---

# Version Upgrade

---

*formsflow.ai* is often updated with new features and bug fixes. For a better user experience and to access the latest features, it is essential to upgrade *formflow.ai* to the newest version.

Check out [changelog](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/CHANGELOG.md) for details on environment variable changes between versions.

# Migration

---

Below are the manual steps required for version migration when you already have formsflow.ai installed.

## Version 6.0.0 to 7.0.0

1. ### BPM database updates

   Manual script execution is required to update the database schema for Camunda 7.21.0.

   - Log in to the BPM database as an administrator
   - Run the [script](https://github.com/aot-technologies/forms-flow-ai/blob/master/forms-flow-bpm/migration/scripts/7.0.0.sql)

2. ### Keycloak updates

   The new permission matrix in v7.0.0 requires changes to your existing Keycloak configuration.

   - Follow the steps outlined [here](https://github.com/AOT-Technologies/forms-flow-ai/tree/develop/forms-flow-idm/migration#700)

## Version 5.3.0 to 6.0.0

1. **forms-flow-web-root-config**

   #### Optional Changes
   - Added environment variable `KEYCLOAK_URL_HTTP_RELATIVE_PATH` to specify the Keycloak relative path.

2. **forms-flow-bpm**

   #### Optional Changes
   - Added environment variable `KEYCLOAK_URL_HTTP_RELATIVE_PATH` to specify the Keycloak relative path.

3. **forms-flow-api**

   #### Optional Changes
   - Added environment variables:
     - `REDIS_URL` to configure Redis for caching purposes.
     - `KEYCLOAK_URL_HTTP_RELATIVE_PATH` to specify the Keycloak relative path.
     - `CONFIGURE_LOGS` to enable/disable log file rotation.

4. **forms-flow-documents**

   #### Optional Changes
   - Added environment variables:
     - `REDIS_URL` to configure Redis for caching purposes.
     - `KEYCLOAK_URL_HTTP_RELATIVE_PATH` to specify the Keycloak relative path.
     - `CONFIGURE_LOGS` to enable/disable log file rotation.

5. **forms-flow-data-analysis-api**

   #### Optional Changes
   - Added environment variables:
     - `KEYCLOAK_URL_HTTP_RELATIVE_PATH` to specify the Keycloak relative path.
     - `API_LOG_ROTATION_WHEN` to specify the frequency of log file rotation.
     - `API_LOG_ROTATION_INTERVAL` to set the time interval for log file rotation.
     - `API_LOG_BACKUP_COUNT` to determine the number of backup log files to keep.
     - `CONFIGURE_LOGS` to enable/disable log file rotation.

## Version 5.2.0 to 5.3.0

1. **forms-flow-web**

   #### Optional Changes
   - Added environment variable `DATE_FORMAT` to change the date format.
   - Added environment variable `TIME_FORMAT` to change the time format.
   - Added environment variable `CUSTOM_THEME_URL` to override the theme.
   - Added environment variable `CUSTOM_RESOURCE_BUNDLE_URL` to customize the resource bundle for internationalization.

2. **forms-flow-api**

   #### Optional Changes
   - Added environment variable `API_LOG_ROTATION_WHEN` for specifying the frequency of log file rotation.
   - Added environment variable `API_LOG_ROTATION_INTERVAL` for setting the time interval for log file rotation.
   - Added environment variable `API_LOG_BACKUP_COUNT` for determining the number of backup log files to keep.

   #### Upgrades
   - Flask upgraded to 2.3.3 and fixed security vulnerabilities.

3. **forms-flow-documents**

   #### Optional Changes
   - Added environment variable `API_LOG_ROTATION_WHEN` for specifying the frequency of log file rotation.
   - Added environment variable `API_LOG_ROTATION_INTERVAL` for setting the time interval for log file rotation.
   - Added environment variable `API_LOG_BACKUP_COUNT` for determining the number of backup log files to keep.

   #### Upgrades
   - Flask upgraded to 2.3.3 and fixed security vulnerabilities.

4. **forms-flow-bpm**

   #### Upgrades
   - Camunda upgraded to 7.20.0, SpringBoot upgraded to 3.1.5, and fixed security vulnerabilities.

**Note**: _Added migration script to move current Camunda authorizations and existing task filters from forms-flow-bpm to forms-flow-api. Follow the instructions [here](https://github.com/AOT-Technologies/forms-flow-ai/blob/v5.3.0/forms-flow-api/README.md#migration-script-for-existing-users)._

## Version 5.0.0 to 5.2.0

1. **forms-flow-web**

   #### Optional Changes
   - Environment variable `USER_ACCESS_PERMISSIONS` is replaced with `ENABLE_APPLICATION_ACCESS_PERMISSION_CHECK` to enable role-level permission.

2. **forms-flow-bpm**

   #### Optional Changes
   - Added environment variables `REDIS_ENABLED`, `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSCODE`, and `SESSION_COOKIE_SECURE`.

3. **forms-flow-forms**

   #### Optional Changes
   - Added environment variable `FORMIO_CLIENT_UI`.

4. **forms-flow-web-root-config**

   #### Mandatory Changes
   - Added environment variables:
     - `MF_FORMSFLOW_WEB_URL`
     - `MF_FORMSFLOW_NAV_URL`
     - `MF_FORMSFLOW_SERVICE_URL`
     - `MF_FORMSFLOW_ADMIN_URL`
     - `MF_FORMSFLOW_THEME_URL`
     to support MicroFrontend Components.

   #### Optional Changes
   - Added environment variables:
     - `ENABLE_FORMS_MODULE`
     - `ENABLE_TASKS_MODULE`
     - `ENABLE_DASHBOARDS_MODULE`
     - `ENABLE_PROCESSES_MODULE`
     - `ENABLE_APPLICATIONS_MODULE`
     to disable specific modules in forms-flow-web.
   - Added environment variable `CUSTOM_THEME_URL` for providing theming configuration.

**Note**: _For listing all forms for clients, existing users should run the RBAC migration script with Camunda authorization. Follow the instructions [here](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/forms-flow-api/README.md#migration-script-for-existing-users)._

## Version 4.5.0 to 5.0.0

1. **forms-flow-web**

   #### Mandatory Changes
   - Rename the following environment variables (values remain unchanged):
     - `CAMUNDA_API_URL` to `BPM_API_URL`.
     - `REACT_APP_CAMUNDA_API_URI` to `REACT_APP_BPM_URL`.

   #### Optional Changes
   - Add environment variables `MULTI_TENANCY_ENABLED`, `MT_ADMIN_BASE_URL`, `MT_ADMIN_BASE_URL_VERSION` to support multi-tenancy. Set `MULTI_TENANCY_ENABLED` to `True` for multi-tenancy support.
   - Add environment variables `CUSTOM_SUBMISSION_URL`, `CUSTOM_SUBMISSION_ENABLED` to support the form adapter.
   - Add environment variables `DRAFT_ENABLED` and `DRAFT_POLLING_RATE` to manage the draft feature, saving unsaved applications as drafts.
   - Add environment variable `EXPORT_PDF_ENABLED` for PDF service to export forms in PDF format.
   - Add environment variable `DOCUMENT_SERVICE_URL` for document service.
   - Remove environment variables `CLIENT_ROLE_ID`, `DESIGNER_ROLE_ID`, `REVIEWER_ROLE_ID`, `ANONYMOUS_ID`, `USER_RESOURCE_ID`.
   - Remove environment variable `FORMIO_JWT_SECRET`.
   - Remove environment variable `REACT_APP_FORMIO_JWT_SECRET`.

   **Note**: Reference values for these environment variables can be viewed [here](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/forms-flow-web/sample.env).

2. **forms-flow-api**

   #### Mandatory Changes
   - Rename environment variable `BPM_API_BASE` to `BPM_API_URL` (value unchanged).
   - Add environment variable `FORMIO_JWT_SECRET`.

   #### Optional Changes
   - Add environment variables `MULTI_TENANCY_ENABLED` and `KEYCLOAK_ENABLE_CLIENT_AUTH` to support multi-tenancy.
   - Remove environment variables `KEYCLOAK_ADMIN_USERNAME` and `KEYCLOAK_ADMIN_PASSWORD`, as admin APIs now use a service account (v4.0.5).
   - Remove environment variable `KEYCLOAK_BPM_CLIENT_SECRET`, as it is not mandatory (v4.0.5).

   **Note**: Reference values for these environment variables can be viewed [here](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/forms-flow-api/sample.env).

3. **forms-flow-bpm**

   #### Mandatory Changes
   - Rename environment variable `BPM_BASE_URL` to `BPM_API_URL` (value unchanged).

   #### Optional Changes
   - Remove environment variable `KEYCLOAK_BPM_CLIENT_SECRET`, as it is not mandatory (v4.0.5).
   - Add environment variables `MULTI_TENANCY_ENABLED`, `KEYCLOAK_ENABLE_CLIENT_AUTH`, `KEYCLOAK_WEB_CLIENTID`, `FORMSFLOW_ADMIN_URL` for multi-tenancy support.
   - Add environment variables `CUSTOM_SUBMISSION_URL`, `CUSTOM_SUBMISSION_ENABLED` to support the form adapter.

   **Note**: Reference values for these environment variables can be viewed [here](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/forms-flow-bpm/sample.env).

4. **forms-flow-forms**

   #### Optional Changes
   - Add environment variable `MULTI_TENANCY_ENABLED` to support multi-tenancy.

   **Note**: Reference values for these environment variables can be viewed [here](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/forms-flow-forms/sample.env).