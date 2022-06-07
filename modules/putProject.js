"use strict";
const axios = require("axios");

async function putProject (req, res, next){
  try{
    let id = req.params.id;
    let updatedProject = await Project.findByIdAndUpdate(id, req.body, {new: true, overwrite: true});
    res.status(200).send(updatedProject);
  }catch(error){
    next(error);
  }
}

module.exports = putProject;