const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/todos', todoRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next ){
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  })
})

app.listen(3001, function(){
  console.log("Server started on port 3001")
})