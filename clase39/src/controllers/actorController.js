const db  = require('../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const actors = await db.Actor.findAll({
                include: ['movies']
            });
            return res.json(actors);
        } catch (error) {
            return res.send(error);
        }
    }
};

module.exports = controller;