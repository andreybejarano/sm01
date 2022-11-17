//Defino array con 6 elementos
let electrodomesticos = [
    "Televisor", 
    "Lavavajillas", 
    "Horno", 
    "Heladera", 
    "Microondas", 
    "Licuadora"
];

//Muestro por consola algunos elementos del array
console.log(electrodomesticos[3]);
console.log(electrodomesticos[0]);
console.log(electrodomesticos[5]);

//Elimino el primer elemento del array y lo agrego al final
electrodomesticos.push(electrodomesticos.shift());

//Agrego dos elementos al final del array
electrodomesticos.push("Tostadora", "Anafe");

//Muestro por consola la longitud del array
console.log(electrodomesticos.length);

//Busco elementos determinados en el array y muestro por consola distintos mensajes
electrodomesticos.indexOf("Televisor") != -1 
    ? console.log("Producto encontrado") 
    : console.log("El producto buscado no existe");
electrodomesticos.indexOf("Sandwichera") != -1 
    ? console.log("Producto encontrado") 
    : console.log("El producto buscado no existe");

//Unifico todos los elementos del array en un string, separandolos por espacios en blanco
let miString = electrodomesticos.join(" ");

//Muestro por consola la cantidad de elementos del string
console.log(miString.length);

//Cambio un nombre del string por otro
let nuevoString = miString.replace("Heladera","Juguera");

//Convierto el string en array y lo muestro por consola
let nuevoArray = nuevoString.split(" ");
console.log(nuevoArray);