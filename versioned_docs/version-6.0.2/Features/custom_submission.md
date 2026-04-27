---
sidebar_position: 19
title: Custom Submission
---

# Form Adapter

---

formsflow.ai supports submission data to be stored and served using an external system. This feature can be used for submission datastore to a different database than MongoDB. If this feature is enabled, MongoDB will be used only for form definition data. A Rest API is needed to support this, where customers can add this Rest API to their choice of database and provide the required endpoints. A reference implementation can be found [here](https://github.com/AOT-Technologies/forms-flow-ai-submissions/tree/develop/forms-flow-submissions).

This feature requires the following environment variables set:

```bash
#custom submission
CUSTOM_SUBMISSION_ENABLED=false
CUSTOM_SUBMISSION_URL=http://{your-ip-address}:{port}
```
Form Adapter uses custom submission URLs to create, submit, get, and edit submissions within a form to the preferred database. These URLs follow the same URL pattern as the formio submission URL.

## Create Custom Form Submission
**POST**
```
{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission
```

Example of how to create a new form submission within a custom form:
```
http://{your-ip-address}:6212/form/62da4ec3e44bcd4da0454ae1/submission
```

**Headers**
```
Authorization Bearer {{token}}

Content-Type application/json
```

**Body**

```
{
  "data": {
    "name": "John",
    "age": 21,
    "applicationStatus": "",
    "applicationId": ""
  }
}
```
**Response**
```
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John",
    "age": 21,
    "applicationStatus": "",
    "applicationId": ""
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```

**Note:** In the response, ```_id``` refers to the submission ID and ```form``` refers to the form ID.

## Get a Submission
**GET**
```
{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission/<submission_id>
```

Retrieve a single submission within a form.

**Headers**
```
Authorization Bearer {{token}}

Content-Type application/json
```

**Response**
```
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John",
    "age": 21,
    "applicationStatus": "",
    "applicationId": ""
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```
## Update a Submission
**PUT**
```
{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission/<submission_id>
```
Update the entire submission.

**Headers**
```
Authorization Bearer {{token}}

Content-Type application/json
```
**Body**
```
{
  "data": {
    "name": "John Joe",
    "age": 22,
    "applicationStatus": "",
    "applicationId": ""
  }
}
```

**Response**
```
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John Joe",
    "age": 22,
    "applicationStatus": "",
    "applicationId": ""
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```

## Partially Update a Submission
**PATCH**
```
{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission/<submission_id>
```
**Headers**
```
Authorization Bearer {{token}}

Content-Type application/json
```

**Body**
```
{
  "data": {
    "applicationStatus": "New",
    "applicationId": "1234"
  }
}
```
**Response**
```
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John Joe",
    "age": 22,
    "applicationStatus": "New",
    "applicationId": "1234"
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```

**Note:** In case of Reviewer actions, if submission data needs to be updated directly from the form, call customSubmissionUrl instead of formio.

![Image](/img/formadapter1.png)

--------------------
![Image](/img/formadapter2.png)