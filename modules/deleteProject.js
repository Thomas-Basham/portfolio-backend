"use strict";
const axios = require("axios");

async function deleteProject (req, res, next){
  let id = req.params.id;
  try{
    await Project.findByIdAndDelete(id);
    res.send ('Project deleted');
  }catch(error){
    next(error);
  }
}

module.exports = deleteProject;