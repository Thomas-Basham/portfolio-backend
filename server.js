"use strict";
console.log("Portfolio Server is Running");

// REQUIRE
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const axios = require("axios");

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


// Modules
const getProjects = require("./modules/getProject");
const postProject = require("./modules/postProject");
const putProject = require("./modules/putProject");
// const deleteProject = require("./modules/deleteProject");

const getComments = require("./modules/getComment");
const postComment = require("./modules/postComment");
const putComment = require("./modules/putComment");
const putLikedBy = require("./modules/putLike");
// const deleteComment = require("./modules/deleteComment");

// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome to the Portfolio server!");
});

// Mongo Endpoints
app.get ('/project', getProjects);
app.post ('/project', postProject);
app.put ('/project/:id', putLikedBy);
// app.delete ('/project', deleteProject);

app.get ('/Comment', getComments);
app.post ('/Comment', postComment);
app.put ('/Comment/:id', putComment);
// app.delete ('/project', deleteComment);




// Errors
app.get("*", (request, response) => {
  response.send("This page does not exist");
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

const PORT = process.env.PORT || 3002; // something is wrong if on 3002
app.listen(PORT, () => console.log(`listening on port ${PORT}`));