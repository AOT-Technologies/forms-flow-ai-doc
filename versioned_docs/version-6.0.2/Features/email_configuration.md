---
sidebar_position: 21
---

# Email Configuration

---

### Send an Email After Submitting the Form

The following steps explain how email integration is done in a workflow.

#### Prerequisites

The [notification_email.bpmn](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/download-file/bpm-examples/camunda/notification_email/notification_email.zip) and [email-template-example.dmn](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/download-file/bpm-examples/camunda/notification_email/v5.0/example-email-template.zip) must be deployed to formsflow.ai.

1. Deploy the [notification_email.bpmn](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/download-file/bpm-examples/camunda/notification_email/notification_email.zip) and [email-template-example.dmn](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/download-file/bpm-examples/camunda/notification_email/v5.0/example-email-template.zip) using the formsflow.ai process tab.

   ![Image](/img/emailconfig8.png)

2. Configure the [NotifyListener](https://aot-technologies.github.io/forms-flow-ai-doc/notify_listener.html) to the desired workflow step. Add **org.camunda.bpm.extension.hooks.listeners.task.NotifyListener** to the **‘CREATE’** event of the task listener. This will send an email upon task creation.

   ![Image](/img/emailconfig1.png)

   Refer [NotifyListener](https://aot-technologies.github.io/forms-flow-ai-doc/notify_listener.html) and add `messageId`, `category`, `groupsOnly`, and `emailGroups` fields.

   The below steps will explain how NotifyListener is linked with the Workflows (`notification_email.bpmn` and `email-template-example.dmn`).

3. The field **messageId** in NotifyListener should have the value “Message_Email”, as this field maps to the message event in the `notification_email.bpmn`.

   ![Image](/img/emailconfig2.png)

   The below screenshot displays the ‘Message_Email’ value in the deployed `notification_email.bpmn`.

   ![Image](/img/emailconfig3.png)

4. The `notification_email` workflow connects with the `email-template-example.dmn` with the decision reference value ‘email-template-example’.

   ![Image](/img/emailconfig4.png)

   The below screenshot displays the ‘email-template-example’ value in the `email-template-example.dmn`.

   ![Image](/img/emailconfig5.png)

5. EmailAttributesListener is configured between the email template and email connector, which takes output data from the DMN template and transfers it to the email connector.

   ![Image](/img/emailconfig6.png)

   For more information about **EmailAttributesListener**, click [here](https://aot-technologies.github.io/forms-flow-ai-doc/emailAttributes_listener.html).

6. Finally, update the [mail-config.properties](https://github.com/AOT-Technologies/forms-flow-ai/blob/master/forms-flow-bpm/src/main/resources/mail-config.properties) with valid email configurations.

   ![Image](/img/emailconfig7.png)

Email Configuration is completed now.