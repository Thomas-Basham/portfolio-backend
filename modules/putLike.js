"use strict";
const Project = require("../models/Project");
const axios = require("axios");

async function putLikedBy(req, res) {
  try {
    let id = req.params.id;
    // console.log(req.body.likedBy)
    let updatedLikedby = await Promise.all([
      Project.findByIdAndUpdate(
        id,
        { $push: { likedBy: req.body.likedBy } },
        { new: true }
      ),
      Project.findByIdAndUpdate(
        id,
        {likes: req.body.likes},
        {new: true}, 
      )
    ]);
    console.log(updatedLikedby);
    res.status(200).send(updatedLikedby);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("NOT CREATED");
  }
}

module.exports = putLikedBy;
