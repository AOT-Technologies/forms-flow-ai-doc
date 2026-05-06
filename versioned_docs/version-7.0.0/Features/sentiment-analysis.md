---
sidebar_position: 9
slug: /sentiment-analysis
---

# Analytics: Sentiment Analysis

Sentiment analysis reveals how customers feel about products, services, or other topics by classifying text as positive, negative, or neutral. This feature relies on BERT, a pretrained language model that captures contextual relationships in text.

### [Model Description](https://huggingface.co/Seethal/sentiment_analysis_generic_dataset)

This is a fine-tuned downstream version of the bert-base-uncased model for sentiment analysis. It is not intended for further downstream fine-tuning for other tasks. The model is trained on a classified dataset for text classification.

## How To Use the Sentiment Analysis Component
One of the unique features of the formsflow.ai framework is `Sentiment Analysis`. It can analyze sentiment from forms based on specific topics specified by the designer during form creation.

- A form designer can drag and drop the `Text Area with Analytics` component and associate it with the corresponding workflow. This activates the Sentiment Analysis component.

    ![Sentiment Analysis](/img/7.0.0/sentiment1.png)

- Based on the input responses of the user, formsflow.ai process sentiment is associated with each user's responses and the response will be patched to submission data by the bpm listener.

  - Refer [section](#data-analysis-api) for more information on `API` used.

- sentiment Analysis Flow is the workflow associated with sentiment analysis. You need to add the Java class in listeners as
`org.camunda.bpm.extension.hooks.delegates.FormTextAnalysisDelegate`

    Refer to the sample shown below:

   ![Sentiment Analysis](/img/7.0.0/sentiment2.png)

:::note
Refer [here](https://huggingface.co/docs/transformers/index) for model creation and training procedures.
:::


### Data Analysis API

The `Data Analysis` API is used to analyze customer sentiments, identifying whether they are positive, negative, or neutral.


### POST API for sentiment analysis

*POST*

`{{DATA_ANALYSIS_API_BASE_URL}}/sentiment`

*HEADERS*
```
Authorization Bearer {{token}}
Content-Type application/json
```

*BODY*
```json
{
  "applicationId": "{valid applicationId}",
  "formUrl": "{valid formUrl}",
  "data": [{
    "text": "bad service",
    "elementId": ""
  }]
}
```
*RESPONSE*
```json
{
  "overallSentiment": "NEGATIVE"
}
```