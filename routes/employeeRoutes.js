const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Render form for new employee
router.get('/new', (req, res) => {
  res.render('newEmployee');
});

router.get('/', async (req, res) => {
  try {
    const employees = await employeeController.getAllEmployees();
    res.render('employees', { employees }); // Render 'employees.ejs' and pass 'employees' data
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Handle form submission for new employee
router.post('/new', async (req, res) => {
  try {
    await employeeController.createEmployee(req.body);
    res.redirect('/employees'); // Redirect to employee list or other appropriate page
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
