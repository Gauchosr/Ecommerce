const express = require('express');
const router = express.Router();
const articoliController = require('../controllers/articoliController');

router.get('/articoli', articoliController.articoli);

module.exports = router;