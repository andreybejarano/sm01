const db  = require('../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const genres = await db.Genre.findAll({
                include: ['movies']
            });
            return res.json(genres);
        } catch (error) {
            return res.send(error);
        }
    }
};

module.exports = controller;