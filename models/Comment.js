"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  project: { type: String },
  user: { type: String },
  userEmail: { type: String },
  text: { type: String },
  updated: { type: String },
});

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;
