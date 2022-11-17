// Tabla de multiplicar

// 1
// Usando console.log dentro de la función
function tablaDeMultiplicar1() {
    console.log("     Tabla de multiplicar");

    for (let tabla = 1; tabla <= 10; tabla++) {
        console.log(" --------------------");
        let num = 1;
        do {
            console.log(" "+ tabla +" * "+ num +" = " + tabla * num);
            num++;
        } while (num <= 10);
    }
}

// Retornando el texto al final
// Explicar \n (salto de linea)
function tablaDeMultiplicar2() {
    let tablas = "     Tabla de multiplicar\n";

    for (let tabla = 1; tabla <= 10; tabla++) {
        tablas += " --------------------\n";
        let num = 1;
        do {
            tablas += " "+ tabla +" * "+ num +" = " + tabla * num + "\n";
            num++;
        } while (num <= 10);
    }

    return tablas;
}

console.log(tablaDeMultiplicar2());