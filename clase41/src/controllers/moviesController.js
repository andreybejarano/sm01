const { validationResult } = require('express-validator');
const { Op } = require("sequelize");
const fetch = require('node-fetch');

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
            const movie = await db.Movie.findByPk(req.params.id, {
                include: ['genre', 'actors']
            });
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
        try {
            const newMovie = {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            };
            await db.Movie.create(newMovie);
            return res.redirect('/movies');
        } catch (error) {
            return res.send({ error });
        }
    },
    edit: async (req, res) => {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            res.render('moviesEdit', { Movie: movie });
        } catch (error) {
            return res.send({ error });
        }
    },
    update: async (req, res) => {
        try {
            const movie = {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            };
            await db.Movie.update(movie, { where: { id: req.params.id } });
            return res.redirect('/movies');
        } catch (error) {
            return res.send({ error });
        }
    },
    delete: async (req, res) => {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            res.render('moviesDelete', { Movie: movie });
        } catch (error) {
            return res.send(error);
        }
    },
    destroy: async (req, res) => {
        try {
            await db.Movie.destroy({ where: { id: req.params.id } });
            res.redirect('/movies');
        } catch (error) {
            return res.send(error);
        }
    },
    search: async (req, res) => {
        try {
            const { q } = req.query;
            const movies = await db.Movie.findAll({
                where: {
                    title: { [Op.like]: `%${q}%` }
                }
            });
            if (movies.length === 0) {
                const url = `http://www.omdbapi.com/?s=${q}&type=movie&apikey=7581f363`;
                const response = await fetch(url);
                const data = await response.json();
                if (data.Error) {
                    return res.status(404).send({
                        status: 404,
                        message:'Pelicula no encontrada!'
                    });
                }
                const moviesToStore = data.Search?.map(element => ({
                    title: element.Title,
                    rating: 1,
                    awards: 1,
                    release_date: `${element.Year}-01-01`
                }));
                const moviesCreated = await db.Movie.bulkCreate(moviesToStore);
                return res.send(moviesCreated);
            }
            return res.send(movies);
        } catch (error) {
            return res.json({error});
        }
    }
}

module.exports = controller;