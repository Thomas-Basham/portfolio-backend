'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
mongoose.connect(process.env.DB_URL);

async function seed() {
  await Project.create({
    project: "City Exploder",
    likes: 0,
    likedBy: ['thomas', 'guest', 'stranger'],
    comments: ['Wow this is neat', 'Nice! good job', 'Come on dude do better... at not doing so goood!!!!']
  });
  mongoose.disconnect();
}

seed();