---
sidebar_class_name: hidden
---

# Timeout Notification Listener

---
### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.task.TimeoutNotifyListener`

This listener sends an email reminder one day before the task due date and an escalation email the day after the due date.

### Type

Task Listener

### How it Works

This listener is intended to be used only when a task has a due date. It relies on the following listener field parameters:

`(1)` **escalationGroup** (`name`: escalationGroup, `type`: expression, `value`: _name of the group_, **Mandatory = Yes** )
`(2)` **messageName** (`name`: messageName, `type`: expression, `value`: _messageName_, **Mandatory = Yes** )
	`messageName` refers to the message name from **notification\_email.bpmn**

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