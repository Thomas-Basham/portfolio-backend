"use strict";
const axios = require("axios");
// import { models } from "mongoose";

const Comment = require('../models/Comment');

async function deleteComment (req, res, next){
  let id = req.params.id;
  try{
    await Comment.findByIdAndDelete(id);
    res.send ('Comment deleted');
  }catch(error){
    next(error);
  }
}

module.exports = deleteComment;