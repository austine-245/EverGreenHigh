const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//create a new student resource
router.post('/students', function(req, res, next){
  Student.create(req.body).then(function(student){
    res.send(student);
  }).catch(next);
});

//read all student resources
router.get('/students', function(req, res, next){
  Student.find({}).then(function(students){
  res.send(students);
  });
});

//update a student resource
router.put('/students/:id', function(req, res, next){
  Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Student.findOne({_id: req.params.id}).then(function(student){
      res.send(student);
    })
  });
});

//delete a student resource
router.delete('/students/:id', function(req, res, next){
  Student.findByIdAndRemove({_id: req.params.id}).then(function(student){
    res.send(student);
  });
});

module.exports = router;