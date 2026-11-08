const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');
const travelerController = require('../controllers/traveler');

// Homepage
router.get('/', mainController.index);

// Travel page
router.get('/travel', travelerController.travel);

module.exports = router;