// Requiring the packages
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

// Create our express app
const app = express();

// Set the engine that is to render files
app.set("view engine", "pug");

// Set the path where to find the pages to render
app.set("views", path.join(__dirname, "views"));

// Set the middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mongoose db connection
mongoose.connect("mongodb://localhost:27017/node-project", () => { console.log('Database Connection Successful') });

//Import routes 
const postsRoute = require('./routes/regRoute');
app.use('/form', postsRoute);


//  Listening for requests: the server
app.listen(5000, () => {
    console.log("App Listening on Port 5000");

})