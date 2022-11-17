// Microdesafio 1
let fs = require("fs");

function importar(marca) {
    let archivo = "";
    switch (marca) {
        case "Hot Toys":
            archivo = "figuras1.json"
            break;
        case "Bandai":
            archivo = "figuras2.json"
            break;
        case "Star Wars":
            archivo = "figuras3.json"
            break;
        default:
            break;
    }

    let rutaArchivo = __dirname + "/datos/" + archivo;

    let figuras = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));

    return figuras;
}

module.exports = importar;