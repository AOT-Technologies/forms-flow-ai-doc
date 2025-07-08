---
sidebar_class_name: hidden
---

# External Submission Listener

---

### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.execution.ExternalSubmissionListener`

This listener is used on the start event navigation path. It enables direct integration with external systems and performs offline synchronization within formsflow.ai by creating a submission in Formio.

### Type

Execution Listener

### How It Works

The listener relies on the following parameter:

`(1)` **formName** (`name`: formName, `type`: expression, `value`: <name of the form>, **Mandatory = Yes** )


### How to Use

The following snapshot shows how to configure the `ExternalSubmissionListener` to an execution.

![Image](/img/externalsubmission-listener-snp1.jpg)