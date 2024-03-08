const express = require('express');
const { postBrand, getAllBrands, deleteBrand } = require('../controllers/brands');
const { verifyToken } = require('../utils/jwt');
const router = express();

router.post('/', verifyToken, postBrand);
router.get('/', getAllBrands);
router.delete('/:id', verifyToken, deleteBrand);

module.exports = router;