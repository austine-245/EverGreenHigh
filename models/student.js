const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({

  firstname:{
    type: String,
    required: [true, 'First Name field is required']
  },

  surname:{
    type: String,
    required: [true, 'Surname field is required']
  },

  class:{
    type: String
  }

});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;