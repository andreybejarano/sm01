//calcular el nuevo sueldo a un trabajador
const nombre = "Andrey";
const apellido = "Bejarano";
const sueldoActual = 100000;
const porcentajeAumento = 25;
const calculoAumento = sueldoActual * porcentajeAumento / 100;
const nuevoSueldo = sueldoActual + calculoAumento;
console.log('Hola, estimad@ ' + nombre + ' ' + apellido);
console.log('En base a su sueldo actual: ' + '$' + sueldoActual)
console.log('Ha recibido un aumento del ' + porcentajeAumento + '%');
console.log('y su nuevo sueldo es de: ' + '$' + nuevoSueldo);