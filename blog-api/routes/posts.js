const Post = require('../models').Post;
const express = require('express');
const posts = express.Router();

postsRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  next();
})
.get(async (req, res, next) => {
  try {
    const posts = await Post.findAll({raw:true});
    res.json(posts);
  }
  catch(error) {
    console. Error(error);
  }
});


module.exports = posts;