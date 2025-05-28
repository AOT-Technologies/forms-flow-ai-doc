---
sidebar_position: 31
---

# FAQ

## ARCHITECTURE

**The video showed three core open-source projects. Were they designed to work together?**  
Yes, we designed the platform for Form.io, Camunda, and Redash to work together.

**At the beginning you showed the association between a form and a workflow. How does the workflow reference data from the submissions?**  
Forms get submitted to the forms database where they have their own unique instance. Then Camunda pulls submission data through form.io’s API to transfer the instance to Camunda.

> **Note:** Camunda pulls submission data through form.io APIs to store within Camunda.

**I want to maybe ask the client for more information after his initial submission. Can I send the form back and ask for more details?**  
It can be configured within forms to do so, yes. This is supported out-of-the-box.

**How do you customize the response to customers after they fill out forms in the backend?**  
You would need to design the workflow in Camunda in order for email templates to be sent to end users after they fill out a form. SMS is not supported out-of-the-box but can be included as an enhancement.

**Can you use other types of databases that aren’t included with the solution (i.e. Microsoft SQL)?**  
Yes, you can. With the v5.0.0 release, formsflow.ai offers a form adapter feature where the submission data can be pushed to a custom ReST endpoint, which can then push data to any database of your choice. However, it may involve customizations on our part to integrate other components with a different database than what comes packaged. We recommend the default databases.

**Can ff.ai be embedded in a webpage?**  
The forms you make with formsflow.ai can be, but not formsflow.ai itself.

**From an architect's perspective, do you build your workflow in Camunda and then upload to ff.ai?**  
formsflow.ai comes with a web process builder where an integration designer can create new workflows, import or modify them, and publish them.

---

## U/I

**Do you have international language support?**  
Yes, languages can be translated on the front end.

**Would we have full control over form theming and design in the U/I?**  
Yes. All changes must be done at the code level.

**Are public-facing forms available?**  
Not currently, but our development team is working on it.

> **Note:** Expected by end of January.

---

## CAMUNDA

**Do I need to get Camunda modeller separately?**  
The web BPMN Modeller packaged with formsflow.ai lets you create and publish your workflows.

**In Camunda, can we request the user for more data after the initial submission involved with a workflow?**  
Yes, you can.

---

## ENTERPRISE

**How do we go about subscribing to the enterprise version of form.io? Or is it through you?**  
Still working on it. Right now, it must be done through form.io.

**How do we go about subscribing to the enterprise version of Camunda? Or is it through you?**  
Still working on it. Right now, it must be done through Camunda.

---

## SECURITY

**When logging in, where are the personas stored in the user settings?**  
They're managed in Keycloak.

**If we had our own in-house ID system, we'd have to configure it with ff.ai?**  
Yes. Keycloak would need to be configured to work with it. It must also support SAML, OpenID, or OAuth2 authentication for a successful implementation.

**Does a client have to log in to submit a form?**  
No, anonymous forms enable unauthenticated users to submit a form.

---

## DEPLOYMENT

**Can I install formsflow.ai on my own server?**  
Yes, you can. You can install it on any public/private cloud provider or on-premise.

> **Note:** [formsflow.ai Docker Deployment Guide](https://github.com/AOT-Technologies/forms-flow-ai/tree/master/deployment/docker)

---

## CUSTOMIZATIONS

**Can we add JavaScript code?**  
Yes, you can make customizations during form design by using JavaScript.

**Can you create a form that is multiple pages?**  
Yes, it just needs some configurations to do so.

---

## LICENSING

**Is formsflow.ai free to use?**  
Yes. You may subscribe to enterprise licensing for support and premium features.

---

# Website FAQ

**This looks like three separate open source projects, do they work together?**  
Yes. We designed our platform to harness the functionality of Forms.io for form building, Camunda for constructing workflows, and Redash for analytic dashboard configuration.

**Can formsflow.ai be embedded in a webpage?**  
The forms created within formsflow.ai can be embedded into a webpage for anonymous use cases. Logging into formsflow.ai requires its own portal.

**Do you have international language support?**  
Yes, all languages on the front end of formsflow.ai can be translated.

**Can the theming and UI of formsflow.ai be customized?**  
Yes, any changes to theming must be done with JavaScript.

**Would a client have to login to formsflow.ai to submit a form?**  
Yes, currently they are required to login, but an upcoming update will change this.
