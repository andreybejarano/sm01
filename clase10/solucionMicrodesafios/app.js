const bicicletas = require("./datosBici.js");

const dhBici = {

    bicicletas: bicicletas,

    // 2 - a
    buscarBici: function (idABuscar) {
        const bicicletaADevolver = this.bicicletas.find(bicicleta => {
            return bicicleta.id == idABuscar;
        });
        if (bicicletaADevolver) {
            return bicicletaADevolver;
        }
        return null;
    },

    // 2 - b
    venderBici: function (idABuscar) {
        const biciBuscada = this.buscarBici(idABuscar);
        if (biciBuscada) {
            biciBuscada.vendida = true;
            return biciBuscada;
        }
        return("Bicicleta no encontrada");
    },

    // 2 - c
    biciParaLaVenta: function () {
       const bicicletasSinVender = this.bicicletas.filter((bicicleta) => {
            return bicicleta.vendida == false;
       });

       return bicicletasSinVender;
    },

    // 2 - d
    totalDeVentas: function () {
        const bicicletasVendidas = this.bicicletas.filter(function(bicicleta) {
             return bicicleta.vendida == true;
        });

        const ventaTotal = bicicletasVendidas.reduce(function(total, actual) {
            return total + actual.precio;
        }, 0);
        
        return ventaTotal;
    },
}

// 2 - a
// console.log(dhBici.buscarBici(10));

// 2 - b
// console.log(dhBici.venderBici(2));

// 2 - c
// console.log(dhBici.biciParaLaVenta());

// 2 - d
// console.log(dhBici.totalDeVentas());