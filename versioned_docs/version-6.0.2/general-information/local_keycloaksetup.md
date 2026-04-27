---
sidebar_class_name: hidden
---

# Keycloak Setup

---

This setup is recommended for local development only. It creates a Docker instance for Keycloak.

### Prerequisites

- [Docker](https://docker.com) must be installed.

### Environment Configuration

1. Ensure a Docker machine is running.
2. Navigate to the Keycloak directory:
   ```bash
   cd {Your Directory}/forms-flow-ai/forms-flow-idm/keycloak
   ```
3. Optional: Rename sample.env to .env. Skip this step to use default values.

### Environment Variables

![Image](/img/Screenshot-2022-06-09-155723.png)

### Starting the Keycloak Server

Run the following command to start the server:

```bash
docker-compose up -d
```

![Image](/img/Screenshot-2022-08-04-145654.png)

**Note:** Use --build to reflect changes, e.g., docker-compose up --build -d.

### Stopping the Keycloak Server

Run the following command to stop the server:

```bash
docker-compose stop
```

![image](/img/Screenshot-2022-08-04-152949.png)

### Health Check

The Keycloak application should be accessible at http://localhost:8080.

![Image](/img/Screenshot-2022-08-05-113828.png)

### Login Credentials:

- Username: admin
- Password: changeme

### Adding a Custom Login Theme
- Log in to http://localhost:8080.
- Navigate to Realm Settings > Themes > Login Theme > Select formsflow > Save.
- Run docker-compose up --build -d to apply the changes.