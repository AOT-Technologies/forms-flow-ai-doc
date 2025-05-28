---
sidebar_class_name: hidden
---

# Application State Listener

---

**org.camunda.bpm.extension.hooks.listeners.ApplicationStateListener**

This component can be used on any task or execution listener event. Upon configuration, it performs the following actions:

1. Syncs the formsflow.ai system with the active status from Camunda.
2. Sends Camunda variables `applicationStatus` and `formUrl` to formsflow.ai for audit history capture.

### Type

Task/Execution Listener

### How It Works

The listener sequentially invokes the following REST endpoints:

1. **Application Endpoint**: `application/{id}` with data from Camunda variables `applicationStatus` and `formUrl`.
2. **Application History Endpoint**: `application/{id}/history` with the same variables.

The component depends on the following Camunda context variables:

1. `applicationId`
2. `applicationStatus`
3. `formUrl`

### How to Use

The following snapshot shows how to configure the **ApplicationStateListener** to a task.

![Image](/img/applicationstate-listener-snp1.jpg)