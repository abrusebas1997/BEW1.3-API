const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const EmployeeSchema = new Schema({
  name: { type: String }

})

Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
