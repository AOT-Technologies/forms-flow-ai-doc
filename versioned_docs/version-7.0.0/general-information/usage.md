---
sidebar_position: 5
---

# Usage Instructions with Example

---

### Set Up Designer, Client And Reviewer Permissions

- In Manage > Roles you can create "Designers" role and check "Create Form, workflow designs" permission.

  ![Image](/img/7.0.0/Screenshot-2024-12-16-143730.png)

- Then create "Client" role and check "Create submissions" permission.

  ![Image](/img/7.0.0/Screenshot-2024-12-16-144105.png)

- In the similar manner you can create "Reviewer" role and check "Access to tasks" and "Can assign, re-assign and work on tasks" permission, as well as "Access to create filters", "Access to view filters" and any others if needed.

  ![Image](/img/7.0.0/Screenshot-2025-01-10-125253.png)

- Now you can go to Manage > Users to assign the roles to specific users by clicking "Add Role" and clicking on the roles ( /designers, /client and /reviewer ).

  ![Image](/img/7.0.0/Screenshot-2024-12-16-155207.png)

### Designer Steps

- Log in to FormsFlow with the cridetials of the user you have assigned the Designers role to.
- After the login is successful you will be able to Create / Import / Export / View / Edit / Delete forms.

  ![Image](/img/7.0.0/Screenshot-2024-11-21-162816.png)

- A new form can be created by a few methods: building a new form, importing an existing form from a file, using an existing template, or using AI.

  **- Create a New Form**

  1. Click on New Form Button. In the popup select "Build". In the next popup provide a name and a description (optional), as well as you can allow the creation of a form with multiple pages. Once done click "Save and Edit Form"
  2. Form editor opens up.
  3. Drag and drop the required components, to build the form's layout.

     ![Image](/img/7.0.0/Screenshot-2024-11-22-095740.png)

  4. Once done, save your layout changes (by clicking "Save Changes" button) and switch to the form's flow by clicking large "Flow" button on the right.

     ![Image](/img/7.0.0/Screenshot-2024-11-21-164314.png)

  5. Add the required actions and conditions by clicking on the "+" button in the flow's interface. Flows are a set of actions that will execute after someone submits the form.
  6. Once done, save your flow changes (by clicking "Save Changes" button) then click "Publish" in the top bar on the right.
  7. That's it! Your form is now live!

  **- Upload a form**

  1. A form in JSON format can be uploaded using the same "New Form" button.

  **- Use a template**

  1. To create a form starting from a templates, click "Use Template" in the New Form popup and select from available templates.

  **- Use AI**

  1. To create a form using our AI assistant, click "Use AI" in the New Form popup and describe to the AI bot which fields you would like in your form.

We have [an example form](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/main/forms-examples/formio.zip) you can import.

### Client Steps

- Now log in to FormsFlow with user credentials for the client.
- After the login is successful you will be able to View and Submit a form.

  ![Image](/img/7.0.0/Screenshot-2024-11-22-100701.png)

- Pick your form and click "Submit New" button.

  ![Image](/img/7.0.0/Screenshot-2024-11-22-101031.png)

- Once the form is filled in and submitted, its flow will start executing.
- If you have a "Create task" as one of the actions in this form's flow you can now log out of the client's account and log in as a reviewer.

### Reviewer Steps

- Log in to formsflow with valid [default user credentials for the reviewer](default user credential.html).

  ![Image](/img/7.0.0/Screenshot-2024-11-22-103146.png)

- You can View the task and the submission by clicking on one of the card on the left.

  ![Image](/img/7.0.0/Screenshot-2024-11-22-103418.png)

- On the task details page you can see three sections - **Form**, **History**, **Diagram**.

  ![Image](/img/7.0.0/Screenshot-2024-11-22-103858.png)

  ![Image](/img/7.0.0/Screenshot-2024-11-22-103913.png)

  ![Image](/img/7.0.0/Screenshot-2024-11-22-103933.png)

- In the top section you can claim the task by assigning it to yourself.

  ![Image](/img/7.0.0/Screenshot-2024-11-22-112741.png)

- Fill in the section that is there for the reviewer (usually on the bottom of the form) and pass it on to the next and submit, which will pass it onto the next action in the flow.