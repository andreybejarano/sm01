const bcrypt = require('bcryptjs');

const db = require('../database/models');

const controller = {
    register: (req, res) => {
        res.render('register');
    },
    create: async (req, res) => {
        try {
            // TODO: implemetar express validator
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename ? req.file.filename : 'default-avatar.png'
            };
            await db.User.create(user);
            res.redirect('/user/login');
        } catch (error) {
            res.send(error);
        }
    },
    list: async (req, res) => {
        try {
            const users = await db.User.findAll({
                include: ['role'],
                attributes: {
                    exclude: ['password', 'roles_id']
                }
            });
            res.render('users', { users });
        } catch (error) {
            res.send(error);
        }
    },
    login: (req, res) => {
        res.render('login');
    },
    loginProcess: async (req, res) => {
        try {
            const user = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!user) {
                return res.render('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidos' } } });
            }
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.render('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidos' } } });
            }
            res.redirect('/user');
        } catch (error) {
            res.send(error);
        }
    }
};

module.exports = controller;