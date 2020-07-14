const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/sql', siteController.index);

module.exports = router;