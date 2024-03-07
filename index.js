// Import necessary modules or functions
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Example route for getting a list of medicines
app.get('/medicines', (req, res) => {
  // Replace this with your actual logic to fetch medicines from a database or another source
  const medicines = [
    { id: 1, name: 'Aspirin', price: 5.99 },
    { id: 2, name: 'Ibuprofen', price: 7.49 },
    // Add more medicines as needed
  ];

  res.json(medicines);
});

// Example route for adding a new medicine
app.post('/medicines', (req, res) => {
  // Replace this with your actual logic to add a new medicine to the database or another source
  const newMedicine = req.body; // Assuming the request body contains the new medicine data

  // Perform validation and database insertion here

  res.json({ message: 'Medicine added successfully', medicine: newMedicine });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
