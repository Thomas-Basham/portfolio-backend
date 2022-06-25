"use strict";
const Comment = require('../models/Comment');
const axios = require("axios");

async function putComment (req, res){
  try{
    let id = req.params.id;
    let updatedComment = await Comment.findByIdAndUpdate(id, req.body, {new: true, overwrite: true}, );
    res.status(200).send(updatedComment);
  }catch(error){
    console.log(error.message);
    res.status(500).send("NOT CREATED")
  }
}

module.exports = putComment;