---
sidebar_position: 18
slug: /drafts
---

# Form: Drafts

---

The draft feature allows users to save and resume incomplete form submissions, enabling them to track and complete applications at a later time.


## Use Case

The draft feature is useful in the following scenarios:

1. When the form is large and the user does not have all the required information at the time of filling it out.
2. In the event of a power outage or network failure during form completion, saving as a draft helps prevent data loss.
3. Users can save their progress as a draft and return later to complete and submit the form.

## Features

1. **Customizable**: The draft feature can be enabled or disabled through configuration, depending on the needs of the installation.
2. **Configurable Polling Rate**: The frequency at which draft data is saved can be adjusted.
3. **Supports Anonymous and Multi-Tenant Users**: Draft saving works for both unauthenticated users and across multi-tenant environments.


### 1. Autosave of submission data

The submission data will automatically be saved to the Drafts table (Drafts tab in Submit > Forms) once the user opens the form for submission.

### 2. Continue with the form

The forms which are not submitted/unfinished applications will appear in the **Drafts** tab (Submit > Forms).

![Image](/img/7.0.0/Screenshot-2024-11-25-172347.png)

Users can continue filling out the form by clicking the **Edit Draft** button.

**Note**: _Once the user submits the form, the form is moved to the Submissions Tab_