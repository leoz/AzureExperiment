# Azure Experiment
Applications to showcase basic Azure capabilities

## Azure single-page application (SPA)

### Steps:

1. Create free Azure account
2. Create new Active Directory (AD) tenant
3. Register new SPA application
4. Get app source code here or follow the [tutorial](https://learn.microsoft.com/en-us/azure/active-directory/develop/single-page-app-tutorial-01-register-app)
5. Update app, tenant and service IDs in [.env](https://github.com/leoz/AzureExperiment/blob/main/reactspalocal/.env) file

### Implements:

* Authentication (login/logout) with AD
* Data access with Microsoft Graph
* Consume an API from a custom service (see below)

### Use:

```console
npm install
npm start 
```

## Azure ASP.NET application

### Steps:

1. Create free Azure account
2. Create new Active Directory (AD) tenant
3. Register new Web application
4. Get app source code here or follow the [tutorial](https://learn.microsoft.com/en-us/azure/active-directory/develop/web-api-tutorial-01-register-app)
5. Update app and tenant IDs in [appsettings.json](https://github.com/leoz/AzureExperiment/blob/main/webapilocal/appsettings.json) file

### Implements:

* Expose an API

### Use:

```console
dotnet run 
```
