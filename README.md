
## Sample MERN Commerce site

A front-end reactjs app and backend database server used strictly for prototyping and training

Rather than in-memory db management, mongodb is used (key configurations set through config folder)

## Getting Set Up

Getting the app running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com/pdhoward/newshop.git
2. rename configEX directories (configuration example) to config. One directory is found in the root and the other in client directory. No other updates are needed if the project is run locally
3. install its dependencies - `npm install`
4. start mongodb on your localhost (mongod ...)
5. start the app - npm run start (or yarn start)

Configurations can be set for mlab or a local mongo db.
See server.js to modify connections api to mongodb

## Backend Server

Note that a backend server is used strictly for prototyping. Not commercial ready

## Refactoring Instructions

This activity is designed to for a junior developer stepping through a refactoring activity on an app

The scope of this task is to integrate a shopping cart with newshop. The MERN shop is functional for displaying and adding new bots, that are for sale to businesses looking for conversational agents. A shopping cart is needed so that customers can select their bot. In the future, and payments app will also be added to accept credit cards for the subscription service

Specific steps required in this activity
1. Trace the existing workflow of the app to ensure a reasonable understanding of the reactjs app and interactions with the backend server
2. Use postman to pulse the backend server route for fetching all agent objects in mongodb. Familiarize your sel with the properties captured on the object
3. Open the shopping cart artifacts in your text editor. Gain a reasonable understanding of how the parent and child components are composed and interact
4. Identify where the shopping card components would be placed in the newshop app
5. Copy the components to newshop. Resolve any compilation errors
6. Update newshop Nav and App.js for Route and Links
7. Update shopping cart components to receive the props from parent
8. Test and resolve compilation errors



## License and Use
 [LICENSE](LICENSE.txt).

## Contributing

For details, check out [CONTRIBUTING](.github/CONTRIBUTING.md).


Strategic Machines and affiliates
connecting businesses with the conversational economy
