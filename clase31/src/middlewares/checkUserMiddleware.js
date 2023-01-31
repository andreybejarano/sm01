function checkUserMiddleware(req, res, next) {
    const users = [
        'Ada', 'Greta', 'Vim', 'Tim'
    ];
    const { user } = req.query;
    const userFound = users.map(element => element.toLowerCase())
        .includes(user?.toLowerCase());
    if (!userFound) {
        return res.send('No tienes los privilegios para ingresar');
    }
    next();
}

module.exports = checkUserMiddleware;