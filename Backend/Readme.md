# directory

backend/
├── node_modules/
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── middleware/
│   ├── index.js
├── .env
├── package.json
├── README.md


# check node
node -v : check node version
npm -v : check npm version

# first dipendencies

initialize vite command -  vitecreate@latest

pacakage.json : The package.json file is a configuration file for a Node.js project. It defines project metadata, dependencies, scripts, and other settings.

name & version → Project name & version.
description → Short summary of the project.
main → Entry file.
scripts → Commands to run scripts (e.g., npm start).
dependencies → Required packages for production.
devDependencies → Packages used in development.

# react-router-dom

1. dependencies - npm install express : Express.js is a fast, minimal, and flexible web framework for Node.js that simplifies building web applications and APIs.

Makes handling HTTP requests easy.
Provides middleware support.
Reduces boilerplate code compared to raw Node.js.

2. dependencies - npm i mongoose : Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a structured schema-based solution for managing application data.

Schema-based Modeling: Mongoose allows you to define a schema for your MongoDB collections, ensuring structure in your documents.

Validation: Provides built-in validation for data before saving it to the database.

Middleware (Hooks): Allows running pre/post functions before saving, updating, or deleting documents.

Query Builder: Simplifies querying MongoDB with chainable methods.

Relationships & Population: Enables referencing other collections and retrieving related data easily.

Built-in Type Casting: Converts data types automatically, reducing errors.

3. dependencies - npm i cors :  CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts resources (like APIs) to be accessed from different domains.

2. dependencies - npm i dotenv :

2. dependencies - nodemon :



