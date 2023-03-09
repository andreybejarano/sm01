const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const genres = await db.Genre.findAll();
            const response = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: 'api/genre'
                },
                data: genres
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const genre = await db.Genre.findByPk(req.params.id);
            if (!genre) {
                return res.status(404).send({
                    status: 404,
                    error: 'Genero no encontrado'
                });
            }
            const response = {
                meta: {
                    status: 200,
                    url: `api/genre/${genre.id}`
                },
                data: genre
            };
            res.send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = controller;