const importar = require("./collectibles");

/* 2 */
let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

/* 3 */
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* 4 */

let collectibles = {

    figures: unifiedCollectibles,

    /* 5 - a */
    listFigures: function () {
        this.figures.forEach(figura => {
            console.log("----------");
            console.log("Marca: " + figura.marca);
            console.log("Nombre: " + figura.nombre);
            console.log("Precio: " + figura.precio);
            console.log("Stock: " + figura.stock);
        });
    },

    /* 5 - b */
    figuresByBrand: function (marca) {
        let figurasADevolver = this.figures.filter(figura => {
            return figura.marca == marca
        });
        return figurasADevolver
    },
}

/* 5 - c */

// collectibles.listFigures();
// console.log(collectibles.figuresByBrand("Star Wars"));