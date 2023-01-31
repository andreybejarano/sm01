const express = require('express');

const adminController = require('../controllers/adminController');
const checkUserMiddleware = require('../middlewares/checkUserMiddleware');

const router = express.Router();

router.get('/', checkUserMiddleware, adminController.index);

module.exports = router;