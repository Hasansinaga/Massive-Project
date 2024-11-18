const express = require('express');
const bodyParser = require('body-parser');
const sellerRoutes = require('./routes/sellerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/sellers', sellerRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});