---
sidebar_class_name: hidden
---

# Application Audit Listener

---

### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.ApplicationAuditListener`

This Listener can be used on any task or execution event. Upon configuration, it sends the values of Camunda variables `applicationStatus` and `formUrl` to the formsflow.ai system to capture audit history.

> **Note**: Use this listener only when creating an audit history without updating the application status field inside the form.

### Type

Task/Execution Listener

### How It Works

The listener invokes the REST endpoint `application/{id}/history` with data from Camunda variables `applicationStatus` and `formUrl`. It depends on the following variables from the Camunda context:

1. `applicationId`
2. `applicationStatus`
3. `formUrl`

### How to Use

The following snapshot shows how to configure the **ApplicationAuditListener** to a task.

![Image](/img/applicationaudit-listener-snp1.jpg)