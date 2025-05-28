---
sidebar_class_name: hidden
---

# Form Duration Attributes Listener

---

**org.camunda.bpm.extension.hooks.listeners.task.TaskDurationAttributesListener**

This component can be used on the **CREATE** event of a task listener. It calculates and sets the DUE DATE in business days only.

### Table of Content

* [Type](#type)
* [How it Works](#how-it-works)
* [How to Use](#how-to-use)

### Type

Task Listener

### How it Works

* This listener takes a mandatory expression field, **SLAInDays**.
* It calculates the due date by adding the `SLAInDays` value to the task creation date (considering business days).
* It also creates a Camunda variable named **task\_due\_date** with the calculated value.

### How to Use

The snapshot below shows how to configure the **TaskDurationAttributesListener** for a task.

![Task Duration Attributes listener - Snapshot](/img/taskdurationattributes-listener-snp1.jpg)