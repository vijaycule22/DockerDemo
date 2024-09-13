
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app yess.');
});
app.get('/health', (req, res) => {
  res.send('Hi, everything is OK HERE!');
});


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
