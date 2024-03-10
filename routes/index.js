const express = require('express');
const router = express();
const userRoutes = require('./users.js');
const productsRoutes = require('./products.js');
const brandsRoutes = require('./brands.js');

router.use('/user', userRoutes);
router.use('/products', productsRoutes);
router.use('/brands', brandsRoutes);

module.exports = router;