const express = require('express');
const { body } = require('express-validator');

const moviesController = require('../controllers/moviesController');

const router = express.Router();

const createMovieValidator = [
    body('title')
        .notEmpty().withMessage('El campo titulo es requerido!')
        .isString().withMessage('El campo titulo debe ser un string!'),
    body('rating')
        .notEmpty().withMessage('El campo rating es requerido!')
        .isInt().withMessage('El campo rating debe ser un Entero!'),
    body('awards')
        .notEmpty().withMessage('El campo awards es requerido!')
        .isInt().withMessage('El campo awards debe ser un Entero!'),
    body('release_date')
        .notEmpty().withMessage('El campo release_date es requerido!')
        .isDate({ delimiters: ['/', '-'] }).withMessage('El campo release_date debe ser una fecha!'),
    body('length')
        .notEmpty().withMessage('El campo length es requerido!')
        .isInt().withMessage('El campo length debe ser un Entero!')
];

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/add', moviesController.add);
router.post('/movies', createMovieValidator, moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;