const fs = require('fs');
const path = require('path');

const menuFile = fs.readFileSync(path.join(__dirname, '../models/menu.json'), 'utf-8');
const listMenu = JSON.parse(menuFile);

const controller = {
    index: (req, res) => {
        res.render('index', { menu: listMenu });
    },
    detail: (req, res) => {
        const { id } = req.params;
        const plato = listMenu.find((element) => element.id == id);
        res.render('detalleMenu', { plato: plato });
    }
};

module.exports = controller;