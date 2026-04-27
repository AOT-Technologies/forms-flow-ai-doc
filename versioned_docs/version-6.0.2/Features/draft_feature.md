---
sidebar_position: 11
---

# Draft Feature

---

Draft feature has been implemented to save and track unfinished applications.

#### Use Case:

1. If there is a large form to submit and the user does not have sufficient information at the time of filling.
2. If a power failure or network failure happens during form filling, data might be lost in such cases. These circumstances can be avoided by saving the form as draft.
3. Users have the option to save a draft and submit the form later.

#### Features:

1. The draft feature is totally customizable. By altering the configuration, this feature can be disabled if a given installation doesn't require it.

   ![Image](/img/draftenv.png)

2. The polling rate is also configurable.
3. Works for anonymous users and multitenant environments.

### 1. Autosave of Submission Data

The submission data will automatically be saved to the Draft table once the user takes the form for submission.

![Image](/img/draft2.png)

### 2. Continue with the Form

The forms which are not submitted/unfinished applications will appear in the **Drafts** tab.

![Image](/img/draft1.png)

Users can continue filling out the form by clicking the Edit button.

![Image](/img/draft3.png)

:::note
Once the user submits the form, the form is moved to the Applications Tab from Drafts.
:::

![Image](/img/draft4.png)