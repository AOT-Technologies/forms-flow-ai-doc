---
sidebar_position: 14
slug: /rpa
---

# Workflow: RPA Integration

---

## Boosting Camunda’s Workflows with Robots

While working with various clients who needed forms and workflow management, the team recognized the usefulness of triggering external tasks from outside of the formsflow.ai ecosystem.

For creating and executing decision-making workflows, formsflow.ai uses a powerful Camunda BPMN, which supports external service tasks that can be extended to automate tasks. formsflow.ai makes use of this powerful external task client to process the robot’s instructions and return a response. That’s how RPA’s integration with formsflow.ai came into existence.

![Image](/img/7.0.0/rpa.png)

**formsflow.ai integrations**

RPA, or robotic process automation, is a hot topic nowadays. It’s a type of business process automation technology making it easy to build, deploy, and manage software robots that mimic human interactions with digital systems and software. Just like normal users, software robots can do such things as understanding what is on a desktop screen, autofilling data and entering keystrokes, navigating through systems, identifying and extracting data from different sources, and performing a wide range of defined actions.

![Image](/img/7.0.0/rpa2.png)

The formsflow.ai team had been searching for an RPA solution that would meet the following criteria:

- Was open source
- Had good support for the tools and libraries that would build and deploy the robots
- Was easy to use

After checking various options, the AOT team chose [Robocorp](https://robocorp.com/)’s RPA solution.

Robocorp supports automating any system that a robot has access to, be it a desktop application, API, mainframe, database, FTP server, or an image stream of the user interface. Robocorp gives you the tools to build and deploy the robots according to your requirements, unlike predefined robots offered by other RPA solutions. And on top of everything it’s an open-source solution.

### The formsflow.ai RPA-Robocorp-Extension

RPA-Robocorp-Extension implementation details can be seen in this [GitHub repo](https://github.com/AOT-Technologies/forms-flow-ai-extensions/tree/master/rpa-robocorp-extension).

Let’s start with installing the formsflow.ai Camunda RPA client. There are two installation options, one standalone, the other Docker based.

- For a standalone installation you’ll need Java, Maven, the Robocorp RCC toolchain, and a cloud account.
- For a Docker-based installation, you’ll need to install Docker if needed, and get Docker up and running. You can then modify the variables and run the application in Docker.

Now let’s look at the system architecture:

![Image](/img/7.0.0/rpaarchitecture.png)

As you can see in the architecture diagram, there are two components: the formsflow.ai Camunda service task and the external RPA client.

We are using Camunda's powerful workflow feature called a service task, which can serve as an event in a pub-sub (publish/subscribe) model, with a unique topic assigned to it. Once Camunda publishes a piece of data, the external task client (developed using the Camunda extension) can pick up the task and execute the job in the following order:

1. Capturing input data.
2. Performing a timely audit.
3. Getting the robot’s configuration details.
4. Running the robot.
5. Capturing the response.
6. Completing the task.

### Authentication Manager

The RPA system has to maintain a constant connection with Camunda in order to process the request and execute the robot. So in order to establish a secure connection the RPA client needs to authenticate through Camunda. The RPA system has built-in options for configuring a type of basic authentication or a Keycloak-based token authentication.

### Robot Data Manager

The robot data manager is the primary datastore for recording an audit history to know if a robot was successful, and if it wasn’t, to provide information for debugging such as how long it took the robot to complete its tasks and other analytics.

### Robot IO Manager

A robot can be triggered with or without input parameters and the same applies to output. The output can be of different types including primitive type data, single files, multiple files, and an empty response. The output can be configured and handled only using a robot IO manager.

### Robot Manager

A robot can be started using the robot manager, which identifies the path that contains the robot’s instructions and runs the robot using an API or command-line tool depending on the configuration provided.

### Robot Pipeline Service

The robot pipeline service comes into picture when RCC is configured as the execution environment. In that situation the service can create a pipeline or bridge between the command line and the Java API.

## Sample Use Case: Background Check Verification

In collaboration with Robocorp we developed a way to automate background checks on business-licence applicants by having a robot perform web scraping. Here’s how we did it:

### Step 1: Build the Robot

First, you need to create your robot using the Robocorp framework. In particular, we’ll be using [Robocorp Lab](https://robocorp.com/docs/developer-tools/robocorp-lab/overview), which provides open-source components as an easy way to get started developing software robots.

![Image](/img/7.0.0/robocorblap.jpg)

Our background-check robot first extracts a business application form’s input variables before starting the web scraping. It will then record screenshots of pages in the following categories before compiling these shots as a PDF file:

- The company’s social-media profile on such sites as LinkedIn, Twitter, Facebook, and Instagram.
- The business’s working website, if it has one.
- Google’s search results about the company.
- Checking if the company is blacklisted, presuming it’s opening up in Canada.

The PDF file can be downloaded in formsflow.ai by the Reviewer of the application form, and then sent on for an Approver’s response.

### Step 2: Create the Form Using formsflow.ai

Next you’ll create the form's layout using the drag-and-drop interface of the formsflow.ai. Then save your layout changes.

![Image](/img/7.0.0/Screenshot-2024-11-22-095740.png)

### Step 3: Create the Camunda Flow

Next you’ll create a Camunda Flow that includes a two-step approval process:

- In the Flow section (access by clicking large **Flow** button on the right side) create a process diagram with an external service task using Camunda Modeler and define the topic name.
- Save your flow changes

![Image](/img/7.0.0/rpa-workflow.png)

### Step 4: Use External Task Handler to Link Robot to Camunda

We need to create an external task handler for each robot. The task handler uses the Camunda REST API to fetch, lock, and complete all the required external service tasks. We can configure the Java handler to custom override all the methods needed to manage and run the robot. This process relies on an external task subscription. Also, you will need to define the topic name as shown below. The topic name should be similar to the robot name.

![Image](/img/7.0.0/rpataskhandler.jpg)

### Step 5: Publish the Form

Go back to form edit page and publish the form (the top right corner) in order to make it available for clients to fill out.

### Step 6: Start the Robot

After the form is filled out and submitted, the associated workflow will be triggered, and an external service task will then start the robot. You can run your robot either directly by using RCC or indirectly by starting a cloud instance.

#### Step 6A: Using the RCC Method

RCC is a set of tooling that allows you to create, manage, and distribute Python-based self-contained automation packages.

Configure your robot type to ROBOCORP_RCC so the robot will run using the RCC method. To run Robocorp RCC directly, you have to add your robots to your resources folder.

After the user fills out and submits the form, the robot will be triggered and will do its task.

With RCC you can use parallel robot invocation by placing your robots in multiple holotree spaces. It’s not a complete parallel solution as you’ll have to keep in mind that each robot runs only once until it receives a new request.

![Image](/img/7.0.0/rcc.png)

After the robot has completed its task, the response file can be downloaded from the form’s page in formsflow.ai.

#### Step 6B: Using the RPA Cloud Method

If you’re using the cloud, you’ll need to set up a cloud account and provide your robot type, workspace ID, and process ID to ROBOCORP_CLOUD. You can run multiple processes here, or choose parallel execution.

All aspects of your robot workforce can be controlled in the cloud, including triggering the robot, uploading and downloading robots, monitoring their status, and getting the results of their work through simple API calls.

![Image](/img/7.0.0/backgroundcheck.png)

Once the new business licence form has been submitted, the cloud-based robot will be triggered and will start processing.

![Image](/img/7.0.0/rpacloud.png)

You can monitor your robot’s activities in the cloud and afterwards check the logs in your workspace.

![Image](/img/7.0.0/rpacloud2.png)

### Step 7: Download the PDF Report

After the robot has completed its task, a response file will be created. Below you can see a sample PDF that was generated by the robot using our sample form data and then downloaded from the forms page on formsflow.ai.

![Image](/img/7.0.0/rpadownload.png)

![Image](/img/7.0.0/rpadownload2.png)

![Image](/img/7.0.0/rpadownload3.png)

And under Review > Tasks you can see the link to the PDF for download

### Step 8: Finishing the Approval Process

The downloaded file can be reviewed in formsflow.ai by a user in the Reviewer role, who can then either Reject the form or mark it as Reviewed with Comments.

## Challenges Integrating Robocorp with formsflow.ai

---

There are many great features that Robocorp integration offers. However, you should remember that parallel robot invocation is a bit limited. Each robot will only run once until it receives a new request.

### Future Integrations

Automating tedious manual work can let companies more effectively utilize their resources and increase their profit. In the next few years RPA has the potential to replace a great variety of manual tasks performed by people, who can then focus on scenarios requiring more nuanced human judgment. Ultimately RPA can be applied anywhere there is a tedious manual task, which could range from simple web scraping to data migration and validation.