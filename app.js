// app.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(express.static('public')); // Serve static files from the 'public' directory


// Connect to MongoDB (Replace 'your_connection_string' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://kirubelTaye:test24554@cluster0.3mweqpt.mongodb.net/employ?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Middleware to parse JSON and handle form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup

const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

// Use defined routes
app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);






// For now, let's just have a basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
