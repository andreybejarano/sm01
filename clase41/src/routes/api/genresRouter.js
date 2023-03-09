const express = require('express');

const genresController = require('../../controllers/api/genresController');

const router = express.Router();

router.get('/', genresController.list);
router.get('/:id', genresController.getById);

module.exports = router;