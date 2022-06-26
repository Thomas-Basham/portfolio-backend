"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  project: { type: String },
  likes: { type: Number, default: null },
  likedBy: { type: Array, default: null },
  comments: {type: Array, default: null}
});

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;
