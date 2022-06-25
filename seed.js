"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");
mongoose.connect(process.env.DB_URL);

async function seed() {
  await Project.create({
    project: "6",
    likes: 0,
    likedBy: [],
    comments: [
      {
        user: "",
        text: "",
        updated: "String",
      },
    ],
  });
  mongoose.disconnect();
}

seed();
