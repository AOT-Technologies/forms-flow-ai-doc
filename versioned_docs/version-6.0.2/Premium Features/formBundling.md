---
sidebar_position: 26
---

# Multi-Form Bundle Feature

---

Form bundling allows the creation and combination of multiple forms into a bundled application package. This feature is ideal for consolidating various forms and streamlining their submission process.

By utilizing this feature, you can generate different forms with unique schemas, each serving a specific purpose. These forms can be combined into a bundled package, acting as a unified interface for users to interact with and submit multiple forms seamlessly. The bundle can be associated with a workflow to handle post-submission steps.

A powerful rule engine is integrated into the bundle, enabling designers to configure rules that control form visibility based on submitted data. For example, selecting an option in one form can trigger the display or hiding of related forms within the bundle.

This flexibility is valuable for complex scenarios, such as consolidating a general form with multiple specialized forms for different request types. Users can fill out and submit all necessary forms efficiently within a single package, reducing complexity and improving the user experience.

### Steps to Create a Bundle

1. Create forms and enable the bundle option to add them to a bundle. Individual forms do not need to be published to be included.

   ![Image](/img/formbundling/enable_bundling.png)

2. Select the **Create Bundle** option under **Forms > Form Bundle**.

   ![Image](/img/formbundling/create_bundle.png)

3. Name the bundle, add a description, and select forms to include.

   ![Image](/img/formbundling/select_Form.png)

4. Change the order of forms in the bundle by dragging them.

   ![Image](/img/formbundling/drag_form.png)

5. Add conditions to control form display in the bundle. Specify criteria and select the form to apply them to.

   ![Image](/img/formbundling/criteria.png)

   **Note**: _Read more about criteria [here](https://github.com/zeroSteiner/rule-engine/blob/master/README.rst)._

6. Save the bundle.

   ![Image](/img/formbundling/save_bundle.png)

7. Attach a workflow to the bundle and publish.

   ![Image](/img/formbundling/publish_bundle.png)

## Designing Forms for Bundles

---

### Things to Keep in Mind

- If a form is included in a bundle, the Reviewer/Approver action button logic should not directly update to Formio. Instead, emit a `customEvent`.

   ```javascript
   form.emit('customEvent', {
     type: "actionComplete",
     component: component,
     actionType: data.managerActionType
   });
   ```
   ![Image](/img/formbundling/button_component.png)

- But in the case of the form used in the form connector, it can directly update formio.

  ![Image](/img/formbundling/button_component_2.png)

## How to Use CombineSubmissionBundleListener
- Configure [FormConnectorListener](https://github.com/AOT-Technologies/forms-flow-ai-ee/blob/feature/form-bundling/forms-flow-bpm/starter-examples/listeners/formconnector-readme.md) for a task. This listener sets bundleUrl as the execution variable.

  ![Image](/img/formbundling/task_listener_1.png)


- Configure the CombineSubmissionBundleListener to merge data from bundleUrl and formUrl, generating a new submission for the associated bundle. The URL of the new submission is assigned to formUrl.

 ![Image](/img/formbundling/task_listener_2.png)    