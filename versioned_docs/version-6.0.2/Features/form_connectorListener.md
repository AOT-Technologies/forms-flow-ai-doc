---
sidebar_class_name: hidden
---

# Form Connector Listener

---

**org.camunda.bpm.extension.hooks.listeners.task.FormConnectorListener**

This component can be used on the **CREATE** event of a task listener. This serves to associate a form with a task. Please note that this is required only when there is a need to switch to a new form as part of the navigation from the initial submitted form.

### Type

Task Listener

### How It Works

This component relies on the following parameters:

- **formName** (Extension Property): Should be the form name from Formio.  
  *Mandatory*: Yes
- **copyDataIndicator** (Listener field of type expression): Possible values: `Y` or `N`. Setting this value to `Y` will propagate all matching field values from the existing formUrl to the new form.
- **fields** (Listener field of type expression): Takes in Camunda variables as an array. For example, `["pid", "applicationId", "task_id"]`. It populates data from Camunda variables to the form.  
  *Mandatory*: Yes  
  *Note*: `pid` is the process instance ID, `task_id` is the task ID, and `applicationId` is the application ID. It is important for forms associated with tasks to know about these.

### How to Use

The following snapshots show how to configure the **FormConnectorListener** to a task.

#### FormConnectorListener being configured on create of task; with fields configured to populate task details into form's metadata fields

![Image](/img/7.0.0/formconnector-listener-snp1.png)

#### Shows the configuration of optional copyDataIndicator being configured to copy data from existing submission to new one

![Image](/img/7.0.0/formconnector-listener-snp2.png)