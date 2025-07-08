---
sidebar_class_name: hidden
---

# Form Duration Attributes Listener

---

### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.task.TaskDurationAttributesListener`

This listener can be used on the **CREATE** event of a task listener. It calculates and sets the `DUE DATE` in business days.

### Type

Task Listener

### How it Works

The listener relies on the following parameters:
`(1)` **SLAInDays** (`name`: SLAInDays, `type`: expression, `value`: <number of days>, **Mandatory = Yes** ])

* It calculates the due date by adding the `SLAInDays` value to the task creation date (considering business days).
* It also creates a Camunda variable named **task\_due\_date** with the calculated value.

### How to Use

The snapshot below shows how to configure the **TaskDurationAttributesListener** for a task.

![Task Duration Attributes listener - Snapshot](/img/taskdurationattributes-listener-snp1.jpg)