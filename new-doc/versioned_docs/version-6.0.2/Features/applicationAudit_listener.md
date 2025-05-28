---
sidebar_class_name: hidden
---

# Application Audit Listener

---

**org.camunda.bpm.extension.hooks.listeners.ApplicationAuditListener**

This component can be used on any event of task or execution. Upon configuration, this sends values from cam variables: **applicationStatus** and **formUrl** to formsflow.ai system for capturing audit.

**NOTE**: To be used only when an audit (i.e., history) is to be created without updating the application status.

### Type

Task/Execution Listener

### How It Works

This invokes the REST endpoint of application history **`application/{id}/history`** with data from cam variables: **applicationStatus** and **formUrl**.

The component is dependent on the following variables from the Camunda context:

- **applicationId**
- **applicationStatus**
- **formUrl**

### How to Use

The following snapshot shows how to configure the **ApplicationAuditListener** to a task.

![Image](/img/applicationaudit-listener-snp1.jpg)