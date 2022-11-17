//Definimos función alquiler
function alquiler(tipoVehiculo, cantDias, sillaBebe){

    let total = 0;

    switch(tipoVehiculo){
        case "Compacto":
            total = 14000 * cantDias;
            break;
        case "Mediano":
            total = 17000 * cantDias;
            break;
        case "Camioneta":
            total = 28000 * cantDias;
            break;
    }

    if(sillaBebe){
        total = total + (1200 * cantDias);
        return "Estimado cliente: con base en el tipo de vehículo " + tipoVehiculo + " alquilado, considerando los " + cantDias + " días utilizados y la silla para bebé, el monto total a pagar es de $"+ total;
    }

    return "Estimado cliente: con base en el tipo de vehículo " + tipoVehiculo + " alquilado, considerando los " + cantDias + " días utilizados, el monto total a pagar es de $"+ total;
}

//Ejecutamos la función alquiler y mostramos el resultado por la consola
console.log(alquiler("Compacto", 8, false))
console.log(alquiler("Mediano", 10, true))
console.log(alquiler("Camioneta", 6, true))