const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Render form for new department
router.get('/new', (req, res) => {
  res.render('newDepartment');
});

router.get('/', async (req, res) => {
  try {
    const departments = await departmentController.getAllDepartments();
    res.render('departments', { departments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/new', async (req, res) => {
  try {
    await departmentController.createDepartment(req.body);
    res.redirect('/departments'); // Redirect to department list or other appropriate page
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
