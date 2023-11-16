const comment = require('../models').Comment;
const express = require('express');
const comments = express.Router();

comments.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  next();
})
.get(async (req, res, next) => {
  try {
    const comments = await comment.findAll({raw:true});
    res.json(comments);
  }
  catch(error) {
    console. Error(error);
  }
});


module.exports = comments;