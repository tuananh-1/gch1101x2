const mongoose = require('mongoose');
const LectureSchema = mongoose.Schema(
   {
      full_name: String,
      birth_year: Number,
      email: String,
      grade: Number,
      gender: String,
      image: String
   }
);
const LectureModel = mongoose.model("LECTURE", LectureSchema, "lecture");
module.exports = LectureModel;