"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  project: { type: String },
  likes: { type: Number, default: null },
  likedBy: { type: [String], default: null },
  comments: [
    { user: String, 
    text:String, 
    updated: String},
  ],
});

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;
