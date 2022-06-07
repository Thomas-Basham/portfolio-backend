"use strict";
const axios = require("axios");

async function getProjects(req, res, next){
  try{
    let results = await Project.find();
    res.status(200).send(results);
  } catch(error){
    next(error);
  }
}
module.exports = getProjects;