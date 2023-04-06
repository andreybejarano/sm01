/**
 * 
 * @description Este middleware verifica que el usuario este logeado y si no lo esta
 * redirecciona al /user/login si lo esta lo deja continuar, se implementa en las rutas donde
 * el usuario si o si para acceder tiene que estar logeado
 */
function authorization(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/user/login');
    }
    next();
}

module.exports = authorization;