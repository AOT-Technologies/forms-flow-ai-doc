---
title: Usage Instructions with Example
sidebar_position: 5
---

# Usage Instructions with Example

---

This page walks through a typical **formsflow.ai** use case for a municipality processing business licence applications. It covers the full lifecycle, from form creation to application submission, review, and approval.

## What You Will Learn

- Setting up users and roles
- Designing an application form
- Submitting an application
- Reviewing and approving submissions
- Viewing application metrics and insights

---

## Actors in This Use Case

- **End User**      : A citizen or business submitting an application
- **Business User** : City staff responsible for reviewing applications
- **Designer User** : City staff responsible for form & flow design

---

## 1. Setting Up Users and Roles

Users and role management is handled using `Manage > Users` & `Manage > Roles`
> Refer [Roles and Permissions](../general-information/roles%20and%20permissions.md) for more information about roles and permission.

### Roles
These are the roles that will be created:
Role                | Privileges                                                                |
--------------------|---------------------------------------------------------------------------|
formsflow-designer  | Can access the form design interface ( `Designer User` )                  |
formsflow-reviewer  | Can access task list, forms, metrics, and insights ( `Business User` )    |
formsflow-client    | Can access and submit forms ( `End User` )                                |

### Users

| Name          | Role               |
|---------------|---------------------|
| Peter Watts   | formsflow-designer  |
| Nancy Smith   | formsflow-reviewer  |
| David Langer  | formsflow-client    |

### User Setup Steps

1. Create users in formsflow using `Self-Registration Method` explained [here](../Features/Management.md#2-direct-user-creation-in-keycloak)
2. Assing [Roles](#roles) to Users using `Manage > Roels` page.

---

## 2. Designing a Business Licence Form

### Performed by: Peter Watts (Designer User)
>There are two option `(a)` Import existing form `(b)` Build a new form.

#### Import a form
1. Download the [business-license-example.json](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/main/forms-examples/business-license-example.json) from this Github repo. 
1. Log in as `Peter Watts` to your formsflowa.i instance.
2. From `Design > Form` page click **New Form**.
3. Click **Import** and then select business-license-example.json downaloaded as part of step #1.
4. Click **Confirm and Edit form**. This will import the layout and flow components of the form.
5. Click **Publish** to make the form available to end users.

#### Build a new form
1. Refer this [video](https://www.youtube.com/watch?v=7oCILkkQK88) to see how to design a layout. 
2. Clikc **Flow** and create the desired flow.
3. Click **Publish**

---

## 3. Submitting the Application

#### Performed by: David Langer (End User)

1. Log in as `David Langer`
2. Goto `Submit > Form`, identify the `Business License` form and click **Submit New**.
3. Fill the form and click **Submit**

#### To review submissions

- Goto `Submit > Form`, click **Submissions** tab view all submissions.
- Click **View Submitted Form** to open a read-only submission **OR**
- Click the **View Details** to view tabs:
  - **Details**: Generic metadata for submission
  - **Forms**: read-only submission
  - **History**: submission progress
  - **Diagram**: shows BPMN workflow (based on user permission)

---

## 4. Reviewing and Approving Submissions

### Performed by: Nancy Smith (Business User)

1. Go to `Review > Tasks`
2. Click on the task showing on the left hand side. Correspoding form will open on the right hand side.
3. Click **Assign to me**.
4. `Approve` or `reject` the application using the provided options.
5. Click **Submit**.

>Review statuses can be configured in the flow designer.

### Application Status Update

- Approved or rejected status will be shown in the **History** tab.
- End user can also see the updated status.
- Each history entry can be opened to view the form state at that step.

---

## 5. Viewing Metrics and Insights

### Metrics Dashboard

- Displays a pie chart of application statuses over time.
- Only accessible to reviewer users.

### Insights Dashboard

- Displays interpreted application data.
- Configurable via **Redash**.
- Supports graphical dashboards for application analytics.

---

## Need Help?

- 📧 [Contact Us](mailto:info@formsflow.ai)
- 🧪 [Try a Free 14-Day Test Instance](https://formsflow.ai/try-it-now/)
- 📄 [Installation Docs](https://aot-technologies.github.io/forms-flow-installation-doc)
- 🛠️ [Source Code on GitHub](https://github.com/AOT-Technologies/forms-flow-ai)
- 🤝 [Partner with Us](https://formsflow.ai/partners/)
