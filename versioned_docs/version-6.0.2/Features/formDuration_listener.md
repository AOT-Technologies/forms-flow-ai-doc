---
sidebar_class_name: hidden
---

# Form Duration Attributes Listener

---

**org.camunda.bpm.extension.hooks.form.TaskDurationAttributesListener**

This component can be used on **CREATE** event of task listener and calculates and sets DUE DATE in business days only.

### Type

Task Listener

### How It Works

- This takes in a **mandatory** expression field **SLAInDays**. It calculates the due date by adding the **SLAInDays** value to the task creation date. Note: This also creates a CAM variable **task_due_date** with the calculated value.

### How to Use

The following snapshot shows how to configure the **TaskDurationAttributesListener** to a task.

![Image](/img/taskdurationattributes-listener-snp1.jpg)