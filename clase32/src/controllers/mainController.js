const { validationResult } = require('express-validator');

const controller = {
    index: (req, res) => {
        res.render('index', { session: req.session });
    },
    store: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('index', { session: req.session, errors: errors.mapped() });
        }
        const { name, color, email, age } = req.body;
        req.session.name = name;
        req.session.color = color;
        req.session.email = email;
        req.session.age = age;
        res.render('index', { session: req.session });
    }
}

module.exports = controller;