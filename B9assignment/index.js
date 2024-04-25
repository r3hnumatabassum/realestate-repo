const express = require('express');

const app = express();

const properties = [
  // Define your property data objects here
  {
    id: 1,
    title: "Luxury Estate in Beverly Hills",
    price: 10000000,
    // ... other property details
  },
  // ... more properties
];

app.get('/api/properties', (req, res) => {
  res.json(properties);
});

// ... other routes for user management, etc.

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
