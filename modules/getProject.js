"use strict";
const Project = require('../models/Project');
const axios = require("axios");

async function getProjects(req, res, next){
  try{
    let results = await Project.find();
    console.log(results)
    res.status(200).send(results);
  } catch(error){
    next(error);
  }
}
module.exports = getProjects;