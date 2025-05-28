---
sidebar_class_name: hidden
---

# Application State Listener

---

**org.camunda.bpm.extension.hooks.listeners.ApplicationStateListener**

This component can be used on any event of task/execution listener. Upon configuration, it:

- Syncs formsflow.ai system with the active status from Camunda.
- Sends values from cam variables: **applicationStatus** and **formUrl** to formsflow.ai system for capturing audit.

### Type

Task/Execution Listener

### How It Works

This invokes the following REST endpoints in sequence:

- Invokes REST endpoint of application **`application/{id}`** with data from cam variables: **applicationStatus** and **formUrl**.
- Invokes REST endpoint of application history **`application/{id}/history`** with data from cam variables: **applicationStatus** and **formUrl**.

The component is dependent on the following variables from the Camunda context:

- **applicationId**
- **applicationStatus**
- **formUrl**

### How to Use

The following snapshot shows how to configure the **ApplicationStateListener** to a task.

![Image](/img/applicationstate-listener-snp1.jpg)