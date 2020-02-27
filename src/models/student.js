const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const StudentSchema = new Schema({
  name: { type: String },
  student_major: { type: String},
  student_age: {type: Number},
  email: {type: String},

})

Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
