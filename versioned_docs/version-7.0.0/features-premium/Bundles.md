---
sidebar_position: 27
---

# Multi-Form Bundle feature

---

Premium Feature

Form bundling introduces the capability to create and combine multiple forms into a bundled application package. This feature is particularly useful in scenarios where there is a need to consolidate various forms and streamline their submission process.

By utilizing this feature, you can generate different forms with unique form schemas, each serving a specific purpose. These forms can then be combined into a bundled application package. This package acts as a unified interface that allows users to interact with and submit multiple forms seamlessly. The bundle can be associated with a workflow which can handle next steps post-submission of the package.

To enhance the functionality, a powerful rule engine is integrated into the bundle. This rule engine provides flexibility to designers, enabling them to configure rules that dictate the visibility of forms based on the data submitted within the forms themselves. This means that the visibility of certain forms can be dynamically controlled based on the information provided by the user. For example, if a user selects a specific option in one form, it can trigger the display or hiding of other related forms within the bundled package.

The flexibility of this feature becomes especially valuable when dealing with complex scenarios. For instance, imagine a situation where you have a general form that needs to include multiple specialized forms, each criteria to different types of requests. With this feature, you can consolidate all these forms into a single bundled application package. As a result, users can fill out and submit all the necessary forms in a seamless and efficient manner.

By leveraging the bundled application package, the complexity associated with managing and submitting different forms is significantly reduced. Instead of navigating through separate interfaces for each form, users can access and interact with all the required forms in a unified manner. This streamlined approach simplifies the process for both the users and designers, resulting in a more efficient and user-friendly application experience.

### Steps to create bundle

1. Create individual forms. The forms you wish to use in a bundle cannot use multiple pages feature, they all must be single page forms.

2. Now in Design > Bundle click **New Bundle** in the top right corner to start creating your desired bundle.

   ![Image](/img/7.0.0/Screenshot-2024-12-06-124052.png)

3. Name the bundle and add a description, then click **Add Forms** and pick the forms you would like in your bundle. You can also change the order of the forms by dragging them around.

   ![Image](/img/7.0.0/Screenshot-2024-12-06-124324.png)

4. Add conditions to control the display of the forms in the Bundle. Add the criteria and select the form to which the criteria should apply.

   ![Image](/img/7.0.0/Screenshot-2024-12-06-125549.png)

   **Note**: [Read more about criteria](https://github.com/zeroSteiner/rule-engine/blob/master/README.rst).

5. At the top of the page click **Save & Preview**.

6. Click **Next** and in step 2 attach or edit a flow to the bundle.

   **Note**: The flows inside the original forms will not be executed with the submission of the bundle. Only this flow will be executed with the submission of the bundle.

   ![Image](/img/7.0.0/Screenshot-2024-12-06-133045.png)

7. Click **Next** and in step 3 check all of the details of the bundle, adjust the permissions and toggle **Publish this Bundle for Client Users** if you are ready to publish this bundle. Click **Save** to save your changes and make the form live.

   ![Image](/img/7.0.0/Screenshot-2024-12-06-141931.png)

### Here are a few things to keep in mind when designing forms

- If a form is included in a bundle, the Reviewer/Approver action button logic should not directly update to formio. Instead emit “customEvent”.

  ```javascript
  form.emit('customEvent', {
    type: "actionComplete",
    component: component,
    actionType: data.managerActionType
  });
  ```
  ![Image](/img/7.0.0/button_component2.png)

- But in the case of the form used in the form connector, it can directly update formio. 

  ![Image](/img/7.0.0/formbundling/button_component_2.png)

### How to Use CombineSubmissionBundleListener
1. Configure [FormConnectorListener](https://github.com/AOT-Technologies/forms-flow-ai-ee/blob/feature/form-bundling/forms-flow-bpm/starter-examples/listeners/formconnector-readme.md) to a task. This listener sets bundleUrl as the execution variable.
    ![Image](/img/7.0.0/formbundling/task_listener_1.png)

2. Configure the CombineSubmissionBundleListener that merges the data from bundleUrl and formUrl to generate a new submission for the associated bundle. The URL of the newly created submission is then assigned to formUrl.

   ![Image](/img/7.0.0/formbundling/task_listener_2.png)