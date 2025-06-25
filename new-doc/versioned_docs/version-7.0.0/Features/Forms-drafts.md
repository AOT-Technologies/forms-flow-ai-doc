---
sidebar_position: 18
slug: /drafts
---

# Form: Drafts

---

Draft feature has been implemented to save and track unfinished applications.

#### Use case:

1. If there is a large form to submit and the user does not have the sufficient information at the time of filling.
2. If a power failure or network failure happens during form filling, data might be lost in such cases. These circumstances can be avoided by saving the form as draft.
3. Users have the option to save a draft and submit the form later.

#### Features:

1. The draft feature is totally customizable. By altering the configuration, this feature can be disabled if a given installation doesn't require it.
2. The polling rate is also configurable.
3. Works for anonymous users and multitenant environments.

### 1. Autosave of submission data

The submission data will automatically be saved to the Drafts table (Drafts tab in Submit > Forms) once the user opens the form for submission.

### 2. Continue with the form

The forms which are not submitted/unfinished applications will appear in the **Drafts** tab (Submit > Forms).

![Image](/img/7.0.0/Screenshot-2024-11-25-172347.png)

Users can continue filling out the form by clicking the **Edit Draft** button.

**Note**: _Once the user submits the form, the form is moved to the Submissions Tab_