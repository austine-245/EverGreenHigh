const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up express app
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/student');
mongoose.Promise = global.Promise;

//body parsing middleware
app.use(bodyParser.json());

//initializing routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error:err.message});
});

//listening for request
app.listen(process.env.port || 5000, function(){
  console.log('Now listening for requests');
});
