const express = require('express');
const {
  addPupuk,
  deletePupuk,
  updatePupuk,
  getPupukById,
  getAllPupuk,
} = require('../controllers/pupukController');
const { authMiddleware } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/', authMiddleware, upload.single('gambar'), addPupuk);
router.delete('/:id', authMiddleware, deletePupuk);
router.put('/:id', authMiddleware, upload.single('gambar'), updatePupuk);
router.get('/:id', authMiddleware, getPupukById);
router.get('/', authMiddleware, getAllPupuk);

module.exports = router;
