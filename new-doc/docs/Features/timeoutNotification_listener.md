---
sidebar_class_name: hidden
---

# Timeout Notification Listener

---

**org.camunda.bpm.extension.hooks.listeners.task.TimeoutNotifyListener**

This component sends an email reminder one day before the task due date and an escalation email the day after the due date.

### Table of Content

* [Type](#type)
* [How it Works](#how-it-works)
* [How to Use](#how-to-use)

### Type

Task Listener

### How it Works

This component is intended to be used only when a task has a due date. It relies on the following listener field parameters:

* **escalationGroup** (Listener Field): A recognized group name within Camunda. `Mandatory = Yes`
* **messageName** (Listener Field): Refers to the message name from **notification\_email.bpmn**. `Mandatory = Yes`

The listener should be configured on the task's **timeout** event with a desired timer definition.

Upon configuration:

* **Reminder (1 day before due date):**
    > For assigned tasks, the reminder is sent to the user.
    > For unassigned tasks, the reminder is sent to the group.

* **Escalation (1 day after due date):**
    > For both assigned and unassigned tasks, the email is sent to the configured **escalationGroup**.

**Note:** This component uses the **notification\_email.bpmn** process and recognizes only the reserved categories **activity\_reminder** and **activity\_escalation**.

### How to Use

The snapshots below show how **TimeoutNotifyListener** can be configured for a task's timeout event.

##### TimeoutNotifyListener configured on task timeout with fields for notification:

![Timeout Notification listener escalationGroup - Snapshot](/img/timeoutnotification-listener-snp1.jpg)

![Timeout Notification listener messageName - Snapshot](/img/timeoutnotification-listener-snp2.jpg)