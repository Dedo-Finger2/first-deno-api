## First Deno API
This is a simple example of a simple CRUD using in-memory database and Deno's Javascript Runtime.

### Controller/user.ts
Has all methods to perform crud actions on the user Model.

### Model/user.ts
An simple Interface to represent a User Model.

### ./router.ts
Where all routes are defined then exported to the main server file.

### ./server.ts
The main server file, contains the server config and router registration.