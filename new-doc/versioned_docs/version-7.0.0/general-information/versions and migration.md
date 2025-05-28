---
sidebar_position: 6
---

# formsflow.ai Version Upgrade

---

formsflow.ai is often updated with new features and bug fixes. For a better user experience and to access the latest features, it is essential to upgrade formflow.ai to the newest version.

Check out [changelog](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/CHANGELOG.md) for details on environment variable changes between versions.

# Migration

---

Below are the manual steps required for version migration when you already have formsflow.ai installed.

## Version 6.0.* to 7.0.0

1. ### BPM database updates

   Manual script execution is required to update the database schema for Camunda 7.21.0.

   - Log in to the BPM database as an administrator
   - Run the [script](https://github.com/aot-technologies/forms-flow-ai/blob/master/forms-flow-bpm/migration/scripts/7.0.0.sql)

2. ### Keycloak updates

   The new permission matrix in v7.0.0 requires changes to your existing Keycloak configuration.

   - Follow the steps outlined [here](https://github.com/AOT-Technologies/forms-flow-ai/tree/develop/forms-flow-idm/migration#700)