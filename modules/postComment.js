
"use strict";
const axios = require("axios");
const Comment = require("../models/Comment");

async function postComment (req, res, next){
  try{
    let createdComment = await Comment.create(req.body);
    console.log('created a project')
    res.status(200).send(createdComment);
  } catch(error){
    next(error);
  }
}

module.exports = postComment;