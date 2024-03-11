const express = require('express');
const router = express();
const userRoutes = require('./users.js');
const productsRoutes = require('./products.js');
const brandsRoutes = require('./brands.js');
const { verifyToken } = require('../utils/jwt.js');

router.use('/user', userRoutes);
router.use('/products', productsRoutes);
router.use('/brands', brandsRoutes);
// router.get('/verify-token', verifyToken, (req, res)=>{
//     res.status(200)
// });

module.exports = router;