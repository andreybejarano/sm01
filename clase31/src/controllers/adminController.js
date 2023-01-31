const controller = {
    index: (req, res) => {
        res.send(`Hola Admin: ${req.query.user}`);
    }
}

module.exports = controller;