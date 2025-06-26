---
sidebar_position: 10
slug: /bpmn-listeners
---

# Flow: Listeners

---

#### Listeners

Listeners provide a powerful mechanism to execute external Java code or evaluate expressions in response to specific events during process execution. They are frequently used during process development to implement custom behavior at key stages of the process.

Depending on their configuration, listeners can be triggered at various points, such as the start or end of an activity, gateway, process instance, or specific events. This flexibility makes them a versatile tool for extending and customizing process logic.

## Predefined Listeners

This table lists the listeners included with formsflow.ai

| Name | Type | How it Works | How to Use |
|------|------|--------------|------------|
| `ApplicationAuditListener` | Task/Execution Listener | This component to be used on any event of task or execution. Upon configuration, this send value from cam variables: "applicationStatus" and "formUrl" to formsflow.ai system for capturing audit. | Refer to [link](./applicationAudit_listener.md) |
| `ApplicationStateListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. Upon configuration it takes care of <br />1. Syncing formsflow.ai system' with the active status from camunda. <br />2. Send value from cam variables: "applicationStatus" and "formUrl" to formsflow.ai system for capturing audit. | Refer to [link](./applicationState_listener.md) |
| `BPMFormDataPipelineListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. It is used for populating CAM Variables into formio data. | Refer to [link](./bpmformDataPipeline_listener.md) |
| `EmailAttributesListener` | Execution Listener | This component intended to run **ONLY** with the process **notification_email.bpmn** and **email-template.dmn** or any similar notification processes. It replaces all reserved identifier **`@{variable}`** with values in email body. | Refer to [link](./emailAttributes_listener.md) |
| `ExternalSubmissionListener` | Execution Listener | This component allows direct integration from any external system and does offline sync-up within formsflow.ai i.e., creates submission in formio. | Refer to [link](./externalSubmission_listener.md) |
| `FormAccessTokenCacheListener` | Execution Listener | This component is intended to run **ONLY** with the dedicated token cache process **formio-access-token.bpmn**.It generates and stores the formio token as variable in global scope. | Refer to [link](./formAccessTokenCache_listener.md) |
| `FormBPMDataPipelineListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. It is used for populating formio data into CAM Variables. | Refer to [link](./formBPMDataPipeline_listener.md) |
| `FormBPMFilteredDataPipelineListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. It is used for populating specific variables from formio to CAM Variables. | Refer to [link](.mdformBPMFilteredDataPipeline_listener.md) |
| `FormConnectorListener` | Task Listener | This component can be used on **CREATE** event of task listener. This serves to associate a form with task. | Refer to [link](./form_connectorListener.md) |
| `FormSubmissionListener` | Task/Execution Listener | This component from the current formUrl create a new revision and set that as a CAM variable. | Refer to [link](./formSubmission_listener.md) |
| `NotifyListener` | Task Listener | This component can be used on **CREATE** event of task listener; and sends email upon task creation. | Refer to [link](notify_listener) |
| `TaskDurationAttributesListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. This calculates and set DUE DATE in business days. | Refer to [link](./formDuration_listener.md) |
| `TimeoutNotifyListener` | Task Listener | This component sends an email reminder a day before task due date, and escalation email on the day after due date. | Refer to [link](./timeoutNotification_listener./) |