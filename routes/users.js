const express = require('express');
const { createUser, authenticate } = require('../controllers/users');
const router = express();

router.post('/', createUser);
router.get('/', authenticate);

module.exports = router;