---
sidebar_class_name: hidden
---

# Notify Listener

---

### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.task.NotifyListener`

This listener can be used on the **CREATE** event of a task listener. It sends an email upon task creation to members of the candidate groups and optionally to members of **emailGroups**.

#### Type

Task Listener

#### How it Works

This component relies on the following listener field parameters (type: expression):

`(1)` **messageId** (`name`: messageId, `type`: expression, `value`: <message name>, **Mandatory = Yes** )
	messageId is the name of the message used for your email notification process

`(2)` **category** (`name`: category, `type`: expression, `value`: <category value>, **Mandatory = Yes** )
	category is the input parameter used in the email tempalate DMN which is used email notification process

`(3)` **groupsOnly** (`name`: groupsOnly, `type`: expression, `value`: <number of days>, **Mandatory = Yes** )
	If set, this flag ensures the email is sent *only* to **emailGroups**

`(4)` **emailGroups** (`name`: emailGroups, `type`: expression, `value`: <number of days>, **Mandatory = No** )
	An array of email group names (e.g., `["ADMO","ED-Operations"]`).


#### How to Use

The snapshots below show how to configure the **NotifyListener** for a task.

##### NotifyListener being configured on task creation with message event details:

![Notify listener (messageId) - Snapshot](/img/notify-listener-snp1.jpg)

![Notify listener (category) - Snapshot](/img/notify-listener-snp2.jpg)

![Notify listener (groupsOnly) - Snapshot](/img/notify-listener-snp3.jpg)

##### Below snapshot shows the configuration of the optional parameter (emailGroups):

![Notify listener (emailGroups) - Snapshot](/img/notify-listener-snp4.jpg)