//Micro desafío 3
//Traductor - Usando el Switch
//"perro”,"gato", "puerta", "ventana", "mesa"

const palabra = 'perro';
let mensaje = '';

switch (palabra) {
    case 'perro':
        mensaje = 'Dog';
        break;
    case 'gato':
        mensaje = 'Cat';
        break;
    case 'puerta':
        mensaje = 'Door';
        break;
    case 'ventana':
        mensaje = 'Window';
        break;
    case 'mesa':
        mensaje = 'Table';
        break;
    default:
        mensaje = 'La palabra ingresada es incorrecta”.';
        break;
}

console.log(mensaje);