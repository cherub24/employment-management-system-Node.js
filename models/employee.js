// models/employee.js

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add other employee fields as needed
});

module.exports = mongoose.model('Employee', employeeSchema);
