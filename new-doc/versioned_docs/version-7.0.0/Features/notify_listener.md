---
sidebar_class_name: hidden
---

# Notify Listener

---

**org.camunda.bpm.extension.hooks.listeners.task.NotifyListener**

This component can be used on the **CREATE** event of a task listener. It sends an email upon task creation to members of the candidate groups and optionally to members of **emailGroups**.

#### Type

Task Listener

#### How it Works

This component relies on the following listener field parameters (type: expression):

* **messageId**: Maps to any process event. **Mandatory = Yes**
* **category**: Maps to the email template DMN category. **Mandatory = Yes**
* **groupsOnly**: If set, this flag ensures the email is sent *only* to **emailGroups**. **Mandatory = Yes**
* **emailGroups**: An array of email group names (e.g., `["ADMO","ED-Operations"]`). **Mandatory = Yes**

#### How to Use

The snapshots below show how to configure the **NotifyListener** for a task.

##### NotifyListener being configured on task creation with message event details:

![Notify listener (messageId) - Snapshot](/img/notify-listener-snp1.jpg)

![Notify listener (category) - Snapshot](/img/notify-listener-snp2.jpg)

![Notify listener (groupsOnly) - Snapshot](/img/notify-listener-snp3.jpg)

##### Below snapshot shows the configuration of the optional parameter (emailGroups):

![Notify listener (emailGroups) - Snapshot](/img/notify-listener-snp4.jpg)