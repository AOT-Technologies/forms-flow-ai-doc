---
sidebar_class_name: hidden
---

# Form Connector Listener

---

**org.camunda.bpm.extension.hooks.listeners.task.FormConnectorListener**

This component is used on the **CREATE** event of a task listener to associate a form with a task. It is required only when switching to a new form during navigation from the initially submitted form.

### Type

Task Listener

### How It Works

The listener relies on the following parameters:

- **formName** (Extension Property): The name of the Formio form. **Mandatory = Yes**
- **copyDataIndicator** (Listener field, type: expression): Possible values: `Y` or `N`. When set to `Y`, it propagates all matching field values from the existing `formUrl` to the new form.
- **fields** (Listener field, type: expression): Specifies Camunda variables as an array (e.g., `["pid","applicationId","task_id"]`) to populate data into the form. **Mandatory = Yes**
  - Note: `pid` is the process instance ID, `task_id` is the task ID, and `applicationId` is the application ID. These are essential for forms associated with tasks.

### How to Use

The following snapshots illustrate how to configure the **FormConnectorListener** to a task:

1. **Configuration on Task Creation**: Shows the listener configured on the `CREATE` event with fields set to populate task details into the form's metadata fields.

   ![Image](/img/formconnector-listener-snp1.png)

2. **Optional copyDataIndicator Configuration**: Demonstrates the optional `copyDataIndicator` set to copy data from an existing submission to a new one.

   ![Image](/img/formconnector-listener-snp2.png)