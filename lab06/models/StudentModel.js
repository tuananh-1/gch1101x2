const mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
   name: String,
   dob: Date,
   gender: String,
   gpa: Number,
   avatar: String
})

var StudentModel = mongoose.model('student', StudentSchema, 'student');
module.exports = StudentModel;