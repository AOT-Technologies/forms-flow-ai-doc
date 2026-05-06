---
sidebar_position: 14
---

# Adding Listeners

---

### Listeners

Listeners allow you to execute external JavaScript or evaluate an expression when certain events occur during process execution.

Listeners are a mechanism often used during process development. We can compare them to aspects of aspect programming in Python or JavaScript. Comparing to aspects may open up some perspectives for you, as many programmers are more familiar with this concept than Camunda-specific listeners. Depending on the definition, listeners can run at start/end activity/gateway/process instance/events.

## Forms-flow-BPM Listeners

This page elaborates on customization and listeners created for use in forms-flow-bpm.

| Name | Type | How it Works | How to Use |
|------|------|--------------|------------|
| `FormConnectorListener` | Task Listener | This component can be used on **CREATE** event of task listener. This serves to associate a form with task. | [Refer to link](form_connectorListener.md) |
| `NotifyListener` | Task Listener | This component can be used on **CREATE** event of task listener; and sends email upon task creation. | [Refer to link](notify_listener) |
| `TaskDurationAttributesListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. This calculates and set DUE DATE in business days. | [Refer to link](formDuration_listener) |
| `ApplicationAuditListener` | Task/Execution Listener | This component to be used on any event of task or execution. Upon configuration, this send value from cam variables: "applicationStatus" and "formUrl" to formsflow.ai system for capturing audit. | [Refer to link](applicationAudit_listener) |
| `ApplicationStateListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. Upon configuration it takes care of: 1. Syncing formsflow.ai system with the active status from camunda. 2. Send value from cam variables: applicationStatus and formUrl to formsflow.ai system for capturing audit. | [Refer to link](applicationState_listener) |
| `FormBPMDataPipelineListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. It is used for populating formio data into CAM Variables. | [Refer to link](formBPMDataPipeline_listener) |
| `BPMFormDataPipelineListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. It is used for populating CAM Variables into formio data. | [Refer to link](bpmformDataPipeline_listener) |
| `ExternalSubmissionListener` | Execution Listener | This component allows direct integration from any external system and does offline sync-up within formsflow.ai i.e., creates submission in formio. | [Refer to link](externalSubmission_listener) |
| `FormAccessTokenCacheListener` | Execution Listener | This component is intended to run **ONLY** with the dedicated token cache process **formio-access-token.bpmn**.It generates and stores the formio token as variable in global scope. | [Refer to link](formAccessTokenCache_listener) |
| `EmailAttributesListener` | Execution Listener | This component intended to run **ONLY** with the process **notification_email.bpmn** and **email-template.dmn** or any similar notification processes. It replaces all reserved identifier `@\{variable\}` with values in email body. | [Refer to link](emailAttributes_listener) |
| `TimeoutNotifyListener` | Task Listener | This component sends an email reminder a day before task due date, and escalation email on the day after due date. | [Refer to link](timeoutNotification_listener) |
| `FormSubmissionListener` | Task/Execution Listener | This component from the current formUrl create a new revision and set that as a CAM variable. | [Refer to link](formSubmission_listener) |
| `FormBPMFilteredDataPipelineListener` | Task/Execution Listener | This component can be used on any event of task/execution listener. It is used for populating specific variables from formio to CAM Variables. | [Refer to link](formBPMFilteredDataPipeline_listener) |