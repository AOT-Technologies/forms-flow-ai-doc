---
sidebar_position: 23
slug: /i8n
---

# Web: Internationalization

---

This feature enables the user to add new language according to their preference. Currently we are providing these languages out of the box:

- Bulgarian
- Chinese
- English
- French
- German
- Portuguese
- Spanish

### Add a New Language
This require the user to fork the github repo and then include your language pack as per the guideline below:

- Select `resourceBundles` folder from `forms-flow-web/src`.
- Create a folder structure as shown below:

  ![Image](/img/7.0.0/image-(20).png)

- Folder name should be the abbreviation of the required language (example: Bulgarian - bg).
- Create a file named `resourceBundles.js` inside the folder.
- Now open folder **'en'** from the same folder `resourceBundles`.
- Copy the content of `en/resourceBundles.js` and paste it to the newly created file.
- Change '**EN**' to '**BG**'.
- Copy each value from the **"key": "value"** and translate the same using Google Translate to the required language.
- Paste the translated language to the new file.
- Import the same file to `forms-flow-web/src/resourceBundles/i18n.js` as with the rest of the languages.
- You should add content of new translation file to `forms-flow-web/src/resourceBundles/formio_resourceBundles.js` also.
- At `resourceBundles/i18n.js` make the required changes as shown below for **'bg'**:

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { RESOURCE_BUNDLES_ZH } from "./zh/resourceBundles";
import { RESOURCE_BUNDLES_EN } from "./en/resourceBundles";
import { RESOURCE_BUNDLES_FR } from "./fr/resourceBundles";
import { RESOURCE_BUNDLES_PT } from "./pt/resourceBundles";
import { RESOURCE_BUNDLES_BG } from "./bg/resourceBundles";
import { RESOURCE_BUNDLES_DE } from "./de/resourceBundles";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      "en": {
        translation: RESOURCE_BUNDLES_EN
      },
      "zh-CN": {
        translation: RESOURCE_BUNDLES_ZH
      },
      "pt": {
        translation: RESOURCE_BUNDLES_PT
      },
      "fr": {
        translation: RESOURCE_BUNDLES_FR
      },
      "bg": {
        translation: RESOURCE_BUNDLES_BG
      },
      "de": {
        translation: RESOURCE_BUNDLES_DE
      }
    }
  });

export default i18n;
```

- Open `forms-flow-api/src/formsflow_api/utils/translations/translations.py`, copy any set of translations, translate the values and paste it back to the file with required language key.
- You should add the proposed name and value of the language to `forms-flow-web/public/config/languageData.json`.
- Build the new image and deploy it.