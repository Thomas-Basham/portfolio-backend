"use strict";
const Project = require('../models/Project');
const axios = require("axios");

async function putProject (req, res){
  try{
    let id = req.params.id;
    let updatedProject = await Project.findByIdAndUpdate(id, req.body, {new: true, overwrite: true});
    res.status(200).send(updatedProject);
  }catch(error){
    console.log(error.message);
    res.status(500).send("NOT CREATED")
  }
}
module.exports = putProject;