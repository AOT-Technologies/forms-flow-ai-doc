---
sidebar_position: 29
---

# Native Integration

---

The Native Integration module facilitates data integration between different applications and systems across an organization. It provides tools and services to enable the development, execution, and governance of integration flows connecting various cloud-based and on-premises systems.

The Integration module offers an integration and automation platform designed to help businesses connect diverse applications and automate workflows without extensive coding expertise. This document outlines the implementation of the Integration module within formsflow.ai.

### Exploring the Integration UI

The Integration section includes three tabs:

1. **Recipe**: Create and manage integration workflows using the Recipe Editor.
2. **Connected Apps**: Connect preferred applications and services to streamline automation processes.
3. **Library**: Access pre-built recipes and integrations from the community, saving time in setting up workflows.

   ![Image](/img/iPaas/integrationUI.png)

#### Sample Use Case

In this example, we aim to develop a recipe for integrating Jira and formsflow.ai, enabling users to generate Jira issues directly from form submissions using Native Integration. Below are the sequential steps involved:

### Step 1: Form Design

Design a form with essential fields, such as incident date, description, and summary, vital for initiating a Jira ticket. This form will trigger the recipe.

   ![Image](/img/iPaas/incident-form.png)

### Step 2: Recipe Creation

1. #### Connecting Apps for Recipe Creation

   To begin, establish connections between relevant applications using the "Connected Apps" tab.

   - Go to the **Connected Apps** tab, click **Create**, then select **Connection**.

     ![Image](/img/iPaas/connection-screenshot.png)

   - Search and select the formsflow.ai application. Provide the connection name, location, and authentication details (e.g., Client ID, Client Secret, API Base URL).

   - Click **Connect** to ensure the connection is set up properly.

     ![Image](/img/iPaas/Connection-GIF.gif)

   **Note**: _Contact administration to obtain authentication details._

2. #### Build Your Recipe

   - Create a new recipe: Navigate to the **Recipes** tab, click **Create**, and select **Recipe**.
   - Name and assign location: Give the recipe a descriptive name and assign it to a location aligned with its function or team.
   - Select a starting point: Choose the formsflow.ai connector as the starting point.
   - Begin building: Customize the recipe using the options provided by the Integration module.

     ![Image](/img/iPaas/Recipe-Name.gif)

   **Note**: _Leaving a recipe name blank will generate a name based on the triggers and actions in the recipe._

   - Click the **+** icon. The interface splits into two sections: the left shows the recipe workflow, and the right facilitates trigger and action configuration.
   - Select **formsflow.ai** from the connected apps on the right.
   - Choose your form (e.g., Incident Reporting form) within the formsflow.ai section.
   - Assign a unique event name to the selected form.
   - Save the recipe to preserve configurations.

     ![Image](/img/iPaas/event-name.gif)

3. #### Configuring Actions

   To utilize action buttons, select the desired app and action. Any app supported by the integration system can be connected.

   - Click **Add Action** to incorporate an action.
   - Select **Jira** as the app and choose **Create Issue** from the available actions.
   - Configure action fields using datapills to dynamically populate fields like issue type, summary, description, assignee, and priority.
   - Save the action to finalize the configuration.

     ![Image](/img/iPaas/actionJiranew.gif)

   - Map the payload and callback suffix datapill to return data to formsflow.ai.

     ![Image](/img/iPaas/Return-response-formsflow.gif)

4. #### Initiate the Recipe

   - Start the recipe by clicking the **Start Recipe** button in the Recipe Editor.

     ![Image](/img/iPaas/start-recipe.png)

     ![Image](/img/iPaas/run-recipe.png)

### Step 3: Workflow

- Add the event name, ensuring it matches the **event name** used during recipe creation for consistency.
- From the **Select Recipe** dropdown, choose the active recipe.
- To exclude any form fields, add them under the exclude fields section.

   ![Image](/img/iPaas/workflow-event-name.png)

Finally, submit the incident reporting form. The recipe will trigger, displaying details in the **Jobs** section, and a new Jira ticket will be generated with the submitted issue summary and description.

## Integrations Dashboard

---

Upon onboarding a new customer, a dashboard named "Integrations" is created to provide insights into integration activities. Accessing this dashboard requires specific permissions for data integrity and security. The **Admin** tab’s dashboard section includes the Integrations dashboard, but other users need authorization to view it. Users must be members of the analytics group to access it.

Below are the steps to navigate and utilize this feature:

1. **Create a new role under formsflow-analytics**:

   Create a role for accessing the Integrations dashboard, e.g., `/formsflow-analytics/group1`.

   ![Image](/img/iPaas/create-role.png)

2. **Add the newly created user role to the Integrations Dashboard**:

   Add the role from Step 1 to the Integrations Dashboard.

   ![Image](/img/iPaas/group-dashboard.png)

3. **Assign the user role to the reviewer requiring access**:

   In the **Users** tab, assign the role from Step 1 to the reviewer needing access.

   ![Image](/img/iPaas/user-role.png)

Once completed, log in as the reviewer, navigate to the **Insights** page, and check the Integrations dashboard to view all integration activities.

   ![Image](/img/iPaas/insights.png)