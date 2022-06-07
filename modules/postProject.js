"use strict";
const axios = require("axios");
const Project = require("../models/Project");

async function postProject (req, res, next){
  try{
    let createdProject = await Project.create(req.body);
    console.log('created a project')
    res.status(200).send(createdProject);
  } catch(error){
    next(error);
  }
}

module.exports = postProject;