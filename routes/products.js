const express = require('express');
const {verifyToken} = require('../utils/jwt');
const { postProduct, getAllProducts, getProduct, updateProduct, deleteAllProducts, deleteProduct,  } = require('../controllers/products');
const router = express();

router.post('/', verifyToken, postProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', verifyToken,updateProduct);
router.delete('/', verifyToken, deleteAllProducts);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;