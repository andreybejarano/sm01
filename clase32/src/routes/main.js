const express = require('express');

const mainController = require('../controllers/mainController');
const storeValidator = require('../validators/storeValidator');

const router = express.Router();

router.get('/', mainController.index);
router.post('/', storeValidator, mainController.store);

module.exports = router;