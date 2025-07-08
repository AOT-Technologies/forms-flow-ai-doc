---
sidebar_class_name: hidden
---

# Form Connector Listener

---

### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.task.FormConnectorListener`

This listner is used on the `CREATE` event of a `task listener` to associate a form with a task. It is required only when switching to a new form during navigation from the initially submitted form.

### Type

Task Listener

### How It Works

The listener relies on the following parameters:

`(1)` **formName** (`name`: formName, `type`: expression, `value`: <name of the form>, **Mandatory = Yes** )
`(2)` **copyDataIndicator** (`name`: copyDataIndicator, `type`: expression, `value`: Y or N, **Mandatory = No** ]
	 When set to `Y`, it propagates all matching field values from the existing `formUrl` to the new form.
`(3)` **fields** (`name`: fields, `type`: expression, `value`: Array of variable names(s), **Mandatory = Yes** ] 
	Specifies Camunda variables as an array (e.g., `["pid","applicationId","task_id"]`). These variables are populated into the form. Note: `pid` is the process instance ID, `task_id` is the task ID, and `applicationId` is the application ID. These are essential for forms associated with tasks.


### How to Use

The following snapshots illustrate how to configure the `FormConnectorListener` to a task:

1. **Configuration on Task Creation**: Shows the listener configured on the `CREATE` event with fields set to populate task details into the form's metadata fields.

   ![Image](/img/formconnector-listener-snp1.png)

2. **Optional copyDataIndicator Configuration**: Demonstrates the optional `copyDataIndicator` set to copy data from an existing submission to a new one.

   ![Image](/img/formconnector-listener-snp2.png)