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
    }
}

module.exports = controller;