// const cars = ['Toyota', 'Renault', 'Ford', 'Citroen', 'Fiat'];
// const fruits = ['Manzana', 'Pera', 'Naranja', 'Kiwi'];

// /**
//  * 
//  * @param {array} elements Array de elementos 
//  * @param {string} label Texto que va a mostrar al inicio de el console log
//  */
// function printElements(elements, label = 'Elemento') {
//     for (let index = 0; index < elements.length; index++) {
//         const number = index + 1;
//         console.log(label + ' ' + number + ' es un: ' + elements[index]);
//     }
// }

// printElements(cars);
// console.log('_________________________________');
// printElements(fruits, 'Fruta');


// function esPar(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// const numbers = [0, 5, 20, 11, 999, 500];

// let cantImpares = 0;
// let cantPares = 0;

// // for (let index = 0; index < numbers.length; index++) {
// //     if(esPar(numbers[index])) {
// //         cantPares++;
// //     } else {
// //         cantImpares++
// //     }
// // }

// let index = 0;
// while (index < 0) {
//     if (esPar(numbers[index])) {
//         cantPares++;
//     } else {
//         cantImpares++
//     }
//     index++;
// }

// console.log('La cantidad de numeros impares es: ' + cantImpares);
// console.log('La cantidad de numeros pares es: ' + cantPares);


const numeros = [];
const pares = [];

for (let index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
        pares.push(index);
    }
    numeros.push(index);
}

console.log(numeros);
console.log(pares);
