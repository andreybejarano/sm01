let colores = ['Rojo', 'Azul', 'Amarillo'];
// let rojo = colores[0];
// let azul = colores[1];
// let amarillo = colores[2];

let [rojo, azul, amarillo] = colores;

const masColores = [...colores, 'Rojo', 'gris', 'blanco'];

const auto = {
    marca: 'Fiat',
    color: 'rojo',
    modelo: 2022
};

const copiaAuto = {
    ...auto,
    tipo: 'Camioneta',
    marca: 'Ford',
    color: 'azul'
}

const autoA = {
    marca: 'Fiat',
    color: 'rojo',
    modelo: 2022
}

const autoB = {
    marca: 'Fiat',
    color: 'rojo',
    modelo: 2022
}

const autoC = {
    marca: 'Fiat',
    color: 'rojo',
    modelo: 2022
}

const autos = [
    autoA,
    autoB,
    autoC
]

console.log(autos);