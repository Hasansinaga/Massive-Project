const express = require('express');
const router = express.Router();
const SellerController = require('../controllers/sellerController');

router.post('/', SellerController.createSeller);
router.get('/', SellerController.getAllSellers);
router.get('/:id', SellerController.getSellerById);
router.put('/:id', SellerController.updateSeller);
router.delete('/:id', SellerController.deleteSeller);

module.exports = router;