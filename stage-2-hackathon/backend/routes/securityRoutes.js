const express = require('express');
const router = express.Router();
const { handleSecurity } = require('../controllers/securityController');
router.all('/', handleSecurity);
module.exports = router;