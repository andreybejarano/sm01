let operacionesBancariasCliente1 = [
    2500, 30000, -5000, -3000, 9000
];
let operacionesBancariasCliente2 = [
    25000, 3000, -500, -2000, 10000
];

// Acumuladores
let depositos = 0;
let retiros = 0;
let saldo = 0;

function cuentaBanco(valores) {
    for (let i = 0; i < valores.length; i++) {
        if(valores[i] < 0) {
            retiros += valores[i];
        } else {
            depositos += valores[i];
        }
        saldo += valores[i];
    }

    return [
        retiros,
        depositos,
        saldo
    ];
}

function cliente(nombre, apellido, operaciones, callback) {
    const resultados = callback(operaciones);
    return [nombre + ' ' + apellido, resultados[0], resultados[1], resultados[2]];
}

let estadoCliente1 = cliente('Pepito', 'Perez', operacionesBancariasCliente1, cuentaBanco);
let estadoCliente2 = cliente('Ana', 'Alvarez', operacionesBancariasCliente2, cuentaBanco);

console.log('Estimado ' + estadoCliente1[0]);
console.log('El monto total de los depósitos es de: $' + estadoCliente1[2]);
console.log('El monto total de los retiros es de: $' + estadoCliente1[1]);
console.log('Por lo tanto, su saldo actual en la cuenta es de: $' + estadoCliente1[3]);
console.log('--------------------------------------------------------------------------');
console.log('Estimado ' + estadoCliente2[0]);
console.log('El monto total de los depósitos es de: $' + estadoCliente2[2]);
console.log('El monto total de los retiros es de: $' + estadoCliente2[1]);
console.log('Por lo tanto, su saldo actual en la cuenta es de: $' + estadoCliente2[3]);