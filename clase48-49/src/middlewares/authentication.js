/**
 *
 * @description Este es un middleware que se va implementar global para que 
 * todas las vistas de ejs tengan la variable locals.session donde se almacena 
 * la informacion de la sesion del usuario, y asi no tener que pasar esta 
 * variable vista por vista
 */
function authentication(req, res, next) {
    if (req.session.user) {
        res.locals.session = req.session.user;
    }
    next();
}

module.exports = authentication;