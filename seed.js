"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");
mongoose.connect(process.env.DB_URL);

async function seed() {
  await Project.create({
    project: "Collab Done",
    likes: 0,
    likedBy: [],
    comments: [
      {
        user: "",
        text: "",
        updated: "",
      },
    ],
  });
  mongoose.disconnect();
}

seed();
