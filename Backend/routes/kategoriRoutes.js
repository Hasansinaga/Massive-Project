const express = require('express');
const {
  addKategori,
  deleteKategori,
  updateKategori,
  getKategoriById,
  getAllKategori,
} = require('../controllers/kategoriController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addKategori);
router.delete('/:id', authMiddleware, deleteKategori);
router.put('/:id', authMiddleware, updateKategori);
router.get('/:id', authMiddleware, getKategoriById);
router.get('/', authMiddleware, getAllKategori);

module.exports = router;
