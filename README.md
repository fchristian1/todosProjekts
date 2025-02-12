# Simple Todo App but advanced architectures
This is a simple Hello World Todo Application. The background is to show how advanced can be the architecture of a simple application.

## todosProject_v1

to start the app in dev mode run the following command:

```bash
clone https://github.com/fchristian1/todosProjekts.git && cd todosProjekts/todosProject_v1 && start_dev
```
## todosProject_v1_terraform

to test the app with terraform run the following command:
you must be login with aws_cli and have the right permissions to create resources S3 and IAM_policies

```bash
clone https://github.com/fchristian1/todosProjekts.git && cd todosProjekts/todosProject_v1_terraform/terraform && terraform init && terraform apply
```


## The App ist built with the following technologies:


- Frontend:
    - React
- Backend:
    - Node.js

Comunication between Frontend and Backend is done with REST API.
The Backend is connected to a MongoDB Database.

## The App has the following features:

- Login / Register
- Create Project
- Edit Project
- Delete Project
- Add Task to Project
- Create Task
- Edit Task
- Delete Task
- Mark Task as completed
- Mark Task as ongoing
- Mark Task as inprocess
- Mark Task as canceled
- Logout

## The App has the following internal structure:

- Frontend:
    - Components - for UI
    - Services - for http requests
    - Pages - for routing
    - Context - for global state management

- Backend:
    - Routes - for routing
    - Controllers - for handling requests
    - Services - for business logic
    - Models - for data structure
    - Connectors - for connecting to the database
    - Middlewares - for handling requests before they reach the controllers
    - Config - for configuration

- Database:
    - MongoDB - for storing data

## The app in his first version(todosProject_v1) has the following architecture:

- Frontend and Backend run direkt on servers
- Frontend and Backend are connected with http requests and responses
- The Database is on a separate server
- The Backend is connected to the Database with a connector
- Monitoring comes on a separate server with Grafana, Prometheus, Loki and Alertmanager
- CI/CD comes on a separate server with a own repository and registry
- All servers here are AWS EC2 Ubuntu Servers as example could also be any other servers, my only point is to show how the architecture can be run with ip addresses and ports over the internet

Server 1 - Frontend
Server 2 - Backend
Server 3 - Database
Server 4 - Monitoring
Server 5 - CI/CD