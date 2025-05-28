---
sidebar_class_name: hidden
---

# Notify Listener

---

**org.camunda.bpm.extension.hooks.listeners.task.NotifyListener**

This component can be used on **CREATE** event of task listener and sends an email upon task creation. It sends emails to members of the candidate's group and to members of **emailGroups** (optional).

### Type

Task Listener

### How It Works

This component relies on the following parameters:

- **messageId** [Mandatory = Yes]
- **category** [Mandatory = Yes]
- **groupsOnly** [Mandatory = Yes]
- **emailGroups** [Mandatory = Yes]

- **messageId** (Listener field of type expression): Maps to any process event.
- **category** (Listener field of type expression): Maps to the email template DMN category.
- **groupsOnly** (Listener field of type expression): Flags that the email should be sent only to **emailGroups**.
- **emailGroups** (Listener field of type expression): Takes email group names as an array. For example, `["ADMO", "ED-Operations"]`.

### How to Use

The following snapshots show how to configure the **NotifyListener** to a task.

#### FormConnectorListener being configured on create of task; with message event details

![Image](/img/notify-listener-snp1.jpg)

![Image](/img/notify-listener-snp2.jpg)

![Image](/img/notify-listener-snp3.jpg)

#### Below snapshot shows configuration of optional parameter (additionalEmailGroups)

![Image](/img/notify-listener-snp4.jpg)