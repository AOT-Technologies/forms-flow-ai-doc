---
sidebar_position: 7
---

# Usage Instructions with Example

---

> The following instructions are using an example from the formsflow.ai - _**Freedom of Information and Protection of Privacy**_.

### Designer Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [user credentials for the designer](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/form](http://localhost:3000/form) where you can `Create / Upload / Download / View / Edit / Delete` a form.

  ![Image](/img/Screenshot-2022-05-13-120316.png)

- A new form can be created by two methods: designing a new form, or by uploading an existing form in JSON format.
  - **Create a New Form**
    1. Click on Create New Form Button. The web page to design the form opens.
    2. Fill in the details, drag and drop the required components, to build the form.

       ![Image](/img/Screenshot 2022-08-17 170901.png)

    3. The components can be customized as they are added.
  - **Upload a Form**
    1. A form in JSON format can be uploaded using the Upload Form button.

There are few example JSON files in our repository which can be downloaded by clicking [Here](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/main/forms-examples/formio.zip).

- **Example:** Upload FreedomOfInformationAndProtectionOfPrivacy.json file.

  ![Image](/img/177704043-c817381d-0abd-4772-adfc-d0c3a71e8972.png)

- You can modify the form by clicking on the **View/Edit Form** button or continue by clicking the **Next** button.

  ![Image](/img/Screenshot-2022-05-13-120606.png)

- At this stage form designing is completed. You can click on the **EDIT button** and associate a default workflow if you want.

  ![Image](/img/Screenshot-2022-05-13-120712.png)

- In order to deploy any other workflow,

  go to [https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/main/bpm-examples/camunda/approval-process.zip](https://github.com/AOT-Technologies/forms-flow-ai-examples/blob/main/bpm-examples/camunda/approval-process.zip) and download any sample workflow (e.g.: one-step-approval.bpmn).

  ![Image](/img/177704370-92ae070e-e9a3-4ad7-9b65-0b9e89071ff3.png)

- Move to Processes tab, choose the workflow one-step-approval, enter a deployment name and click on Deploy.

  ![Image](/img/Screenshot 2022-08-12 120358.png)

  ![Workflow](/img/workflow.png)

- After associating the workflow, click on the **Next** button to Preview and Confirm.

  ![Image](/img/Screenshot-2022-07-07-152421.png)

- You can click on the **Next** Button and publish the form for clients.

  ![Image](/img/Screenshot-2022-07-07-152653.png)

- Click on **Save** button to complete designing a form.
- Form designing is successfully completed, you can now Log out and go to [Client Steps](#client--steps2).

### Client Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [default user credentials for the client](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/form](http://localhost:3000/form) where you can View and Submit a form.

  ![Image](/img/Screenshot-2022-05-13-142749.png)

- Click **Submit New Button** on the form to fill and submit it.

  ![Image](/img/Screenshot-2022-05-13-143201.png)

- If you had associated a workflow with the form, the form will start the workflow.
- Once this action is completed, you can now log out and go to [Reviewer Steps](#reviewer-steps) if you have a user review mentioned in your workflow.

### Reviewer Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [default user credentials for the reviewer](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/task](http://localhost:3000/task).

  ![Image](/img/Screenshot-2022-05-13-145744.png)

- You can navigate to the Applications tab to view the Form submissions.

  ![Image](/img/Screenshot-2022-05-13-145835.png)

- You can View the submissions against a form by clicking on the **View** button.

  ![Image](/img/Screenshot-2022-05-13-145929.png)

- You can click on the **Export PDF** button to view the submission data as a PDF.

  ![Image](https://user-images.githubusercontent.com/83584866/124598443-3cacbb80-de82-11eb-8a19-bfe379978864.PNG)

- On clicking the associated task that was recently created, i.e., _Freedom of Information and Protection of Privacy_, the task detailed menu usually has three sections - **Form**, **History**, **Diagram**.

  ![Image](/img/Screenshot-2022-05-13-145744.png)

  ![Image](/img/Screenshot-2022-05-13-150110.png)

  ![Image](/img/Screenshot-2022-05-13-150159.png)

- On claiming the task, the Reviewer can mark the form as reviewed or to return it with his/her feedback to the client.

  ![Image](/img/Screenshot-2022-05-13-150354.png)

  ![Image](/img/Screenshot-2022-05-13-145242.png)

- In the **Application** section, the form submission history can be found and the form can be viewed.

  ![Image](/img/Screenshot-2022-05-13-150449.png)

  ![Image](/img/Screenshot-2022-05-13-150559.png)

- Reviewer action is completed.

## Create New Business License Application

> The following instructions are using an example form from the Form.io - Create _**New Business License Application**_.

### Designer Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [user credentials for the designer](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/form](http://localhost:3000/form) where you can `Create / View / Edit / Delete` a form.

  ![Image](/img/business1.png)

- Select the _**New Business License Application**_ form by clicking on it.
- You can modify the form by clicking on the **View/Edit Form** button or continue by clicking the **Next** button.

  ![Image](/img/business2.png)

- At this stage form designing is completed, you can click on the **EDIT Button** and associate a workflow - Two-Step Approval-listener.

  ![Image](/img/business3.png)

- After the associate workflow is completed click on the **Next Button** to Preview and Confirm.

  ![Image](/img/business4.png)

- Click on **SAVE Button** to complete designing a form.
- Form designing is successfully completed, you can now Log out and go to [Client Steps](#client---steps).

### Client Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [default user credentials for the client](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/form](http://localhost:3000/form) where you can View and Submit a form.

  ![Image](/img/business5.png)

- Click **Submit New** button on the form which you wanted to submit.
- The previous action will redirect you to the form, where you can fill in the details and Submit them.

  ![Image](/img/business6.png)

- Fill in the details and Submit the form, You can repeat this action as per your requirement.

  ![Image](/img/business7.png)

- If you had associated a workflow with the form, the form will start the workflow.
- This action is completed, you can now Log out and go to [Clerk Steps](#clerk-steps).

### Clerk Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [default user credentials for Clerk](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/task](http://localhost:3000/task).

  ![Image](/img/business8.png)

- You can navigate to the Applications tab to **View the Form** submissions.

  ![Image](/img/business9.png)

- The associated task can be found for the Clerk role in the **Task Menu** section.
- On clicking the associated task which was recently created, i.e., _New Business License Application with Two-Step Approval-listener_, the task detailed menu usually has three sections – **Form**, **History**, **Diagram**.

  ![Image](/img/business10.png)

  ![Image](/img/business11.png)

  ![Image](/img/business12.png)

- On claiming the task, the Clerk is able to mark the form as reviewed or to return it with his/her feedback to the client.
- Return option will send the form back to the client for edit and resubmission.

  ![Image](/img/business13.png)

  ![Image](/img/business14.png)

- On returning, the form application status changes from New to Resubmit with an edit option.

  ![Image](/img/business15.png)

- Log in as a client and resubmit the form, then status changes to resubmitted.

  ![Image](/img/business16.png)

- Log in as a clerk and claim the task. Submit his/her review with feedback. Then the status changes to reviewed.

  ![Image](/img/business17.png)

- This action is completed, you can now log out and go to [Approver Steps](#approver-steps).

### Approver Steps

- Log in to [http://localhost:3000](http://localhost:3000) (forms-flow-web) with valid [default user credentials for Approver](default user credential.html).
- After the login is successful you will be redirected to [http://localhost:3000/task](http://localhost:3000/task).

  ![Image](/img/business18.png)

- The associated task can be found for the Approver role in the **Task Menu** section.
- On claiming the task, the Approver is able to mark the form with his/her review (review approved/rejected/returned) and can add feedback.

  ![Image](/img/business19.png)

  ![Image](/img/business20.png)

- Now that this action is completed, the New Business License Application has completed its workflow.