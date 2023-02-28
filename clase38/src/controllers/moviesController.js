const { validationResult } = require('express-validator');

const db = require('../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const movies = await db.Movie.findAll();
            res.render('moviesList', { movies });
        } catch (error) {
            res.send({ error });
        }
    },
    detail: async (req, res) => {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            res.render('moviesDetail', { movie });
        } catch (error) {
            res.send({ error });
        }
    },
    new: async (req, res) => {
        const movies = await db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        });
        res.render('newestMovies', { movies });
    },
    recomended: async (req, res) => {
        const movies = await db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        });
        res.render('recommendedMovies', { movies });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: async (req, res) => {
        res.render('moviesAdd');
    },
    create: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('moviesAdd', { errors: errors.mapped() });
        }
        const newMovie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        };
        try {
            await db.Movie.create(newMovie);
            return res.redirect('/movies');
        } catch (error) {
            return res.send({ error });
        }
    }
}

module.exports = controller;