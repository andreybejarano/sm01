const path = require('path');
const fs = require('fs');

function logMiddleware(req, res, next) {
    const pathUserLogsFile = path.join(__dirname, '../logs/userLogs.txt');
    fs.appendFileSync(pathUserLogsFile, `El usuario ingresó a la ruta: ${req.url}\n`);
    next();
}

module.exports = logMiddleware;