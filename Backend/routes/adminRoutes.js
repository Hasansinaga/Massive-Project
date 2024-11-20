const express = require('express');
const { 
  addSeller, 
  deleteSeller, 
  updateSeller, 
  getSellerById, 
  getAllSellers, 
  loginAdmin, 
  logoutAdmin 
} = require('../controllers/adminController');
const { authMiddleware, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// Login dan Logout Admin
router.post('/login', loginAdmin);
router.post('/logout', authMiddleware, adminOnly, logoutAdmin);

// CRUD Seller
router.post('/seller', authMiddleware, adminOnly, addSeller);
router.delete('/seller/:id', authMiddleware, adminOnly, deleteSeller);
router.put('/seller/:id', authMiddleware, adminOnly, updateSeller);
router.get('/seller/:id', authMiddleware, adminOnly, getSellerById);
router.get('/seller', authMiddleware, adminOnly, getAllSellers);

module.exports = router;
