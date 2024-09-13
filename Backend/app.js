// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Define a route for the root URL (/)
app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app.');
});
app.get('/health', (req, res) => {
  res.send('Hi, everything is OK HERE!');
});

// return list of all users
app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'David Becham',
    },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
