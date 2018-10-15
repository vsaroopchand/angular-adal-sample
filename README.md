## Angular4+ with ADAL.js

A simple starter project showing how to use [ADAL](https://github.com/AzureAD/azure-activedirectory-library-for-js/) with Angular4+


### Client-App
- Clone [this](https://github.com/vsaroopchand/angular-adal-sample) repository
- Run `npm install` to install dependencies
- Run `bower install` to install Bootstrap 3.3.7 and JQuery 
- Register your applications (https://docs.microsoft.com/en-us/azure/active-directory/active-directory-app-registration)
- Update app.module.ts with your Tenant and ClientIDs
- Run `npm start` to run the application
- Open browser to [`http://localhost:4200`](http://localhost:4200)

### Server-App
- Update appsettings.json with your Tenant and ClientID for Server-App
- Run dotnet build && dotnet run
- Update Client-App's app.module.ts, change apiEndpoint to reflect Server-App URI


