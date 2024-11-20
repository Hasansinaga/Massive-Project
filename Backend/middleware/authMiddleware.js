const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware untuk otentikasi
exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    // Cek jika error disebabkan oleh kadaluarsa
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    }
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Middleware untuk memastikan admin berdasarkan username
exports.adminOnly = (req, res, next) => {
  const adminUsername = "admin"; // username admin yang kita gunakan di database

  // Cek jika yang login adalah admin
  if (req.user.username !== adminUsername) {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};
