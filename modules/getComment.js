"use strict";

const Comment = require('../models/Comment');

// const axios = require("axios");

async function getComments(req, res, next){
  try{
    let results = await Comment.find();
    console.log(results)
    res.status(200).send(results);
  } catch(error){
    next(error);
  }
}
module.exports = getComments;