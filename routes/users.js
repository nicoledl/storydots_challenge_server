const express = require('express');
const { createUser, login } = require('../controllers/users');
const router = express();

router.post('/', createUser);
router.post('/login', login);

module.exports = router;