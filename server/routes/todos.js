const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get("/", function(req, res, next){
  Todo.find({})
  .then(todos => res.send(todos))
  .catch(err => next(err));
})

module.exports = router,