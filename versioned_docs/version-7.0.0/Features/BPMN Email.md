---
sidebar_position: 12
---

# BPMN Email Connector

---

### Send an Email from a Flow

The following steps explain how to configure and use the email connector (via `mail-send`) in a BPMN flow.

1. #### Flow
   Launch your BPMN Modeler and open the flow where you want to send an email. Insert or select a **Service Task** in the workflow where the email should be sent.

2. #### Set the Service Task to Use a Connector
   Select the Service Task and open the Properties/Details panel. Under **Implementation**:
   - Choose **Type** as `Connector`.
   - Set the **Connector ID** to `mail-send` (or your engine-specific ID).

   *Reference Screenshot:*

   ![Image](/img/7.0.0/bpm/email.png)

3. #### Configure Connector Inputs
   Under **Connector inputs**, define parameters for the email connector. Common inputs include **to**, **subject**, and **html** or **text**. You can also configure additional parameters like **cc**, **bcc**, **attachments**, and so on.

4. #### Save and Deploy
   When all required inputs are set, ensure your BPMN model shows **0 Errors, 0 Warnings**. Save and deploy the process to your BPM engine.

5. #### Test the Flow
   Run the process. When the flow reaches the **Send Email** Service Task, the engine will invoke the `mail-send` connector with your specified parameters. Verify the recipient’s inbox to confirm success.

---

## Configuring the Email Connector Parameters

Each parameter below can be specified as a hard-coded string value or via an expression referencing a process variable (e.g., `${variableName}`).

| Input Parameter | Type | Required? | Description |
|-----------------|------|-----------|-------------|
| `from` | String | No | Sender’s email address. Typically read from configuration if not provided. |
| `fromAlias` | String | No | Display name for the `from` address. Also typically read from configuration if omitted. |
| `to` | String | **Yes** | Primary recipient’s email address. Can be a static string (`"user@example.com"`) or an expression (`${email}`). |
| `cc` | String | No | Comma-separated list of CC recipients. |
| `bcc` | String | No | Comma-separated list of BCC recipients. |
| `subject` | String | **Yes** | Subject line for the email, e.g. `"Order Confirmation"` or `${email_subject}`. |
| `text` | String | No | Plain-text body of the email. Optional if using `html`. |
| `html` | String | No | HTML body of the email. Either `text` or `html` (or both) can be used. |
| `fileNames` | `List<String>` | No | Paths to files for attachments. Example: `["/path/to/file1.pdf"]`. |
| `files` | `Map<String, File>` | No | Map of filenames → file objects stored as process variables for attachments. |

**Note**: _Make sure your BPM engine’s SMTP settings (host, port, credentials) are configured so the **mail-send** connector can dispatch emails successfully._