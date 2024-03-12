const express = require('express');
const {verifyToken} = require('../utils/jwt');
const { postProduct, getAllProducts, getProduct, updateProduct, delete_product,  } = require('../controllers/products');
const router = express();

router.post('/', verifyToken, postProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, delete_product);

module.exports = router;