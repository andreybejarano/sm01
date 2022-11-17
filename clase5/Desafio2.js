function total_a_pagar_por_el_cliente(hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let montoTotal = 0;

    switch (hamburguesa) {
        case "Carne a la parilla":
            montoTotal += 1800;
            break;
        case "Pollo":
            montoTotal += 1500;
            break;
        case "Vegetariana":
            montoTotal += 1200;
            break;
    }

    if (jamon) montoTotal += 30;
    if (queso) montoTotal += 25;
    if (salsaTomate) montoTotal += 5;
    if (mayonesa) montoTotal += 5;
    if (mostaza) montoTotal += 5;
    if (tomate) montoTotal += 15;
    if (lechuga) montoTotal += 10;
    if (cebolla) montoTotal += 10;

    return montoTotal;
}
function mensajeUsuario(nombre, apellido, callback) {
    console.log("Estimado " + nombre + " " + apellido + ", el monto total a pagar es de: " + callback)
}
mensajeUsuario("alfonso", "lombardi", total_a_pagar_por_el_cliente("Carne a la parilla", true, false, false, false, false, false, false, false,));











