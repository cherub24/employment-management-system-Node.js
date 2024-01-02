// controllers/employeeController.js

const Employee = require('../models/employee');

const createEmployee = async (employeeData) => {
  try {
    const newEmployee = new Employee(employeeData);
    return await newEmployee.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllEmployees = async () => {
  try {
    return await Employee.find(); // Retrieve all employees
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees, // Add getAllEmployees to the exported module
  // ... other controller methods
};
