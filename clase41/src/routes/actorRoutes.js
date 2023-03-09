const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/actors', actorController.list);

module.exports = router;