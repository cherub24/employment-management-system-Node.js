const mongoose = require('mongoose');

// Schema definition for Department
const departmentSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  // Other fields...
});

// Compile the Department model based on the schema
const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
