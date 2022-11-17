//2-A Evaluar el perfil del usuario
const perfil = 'administrador';
let mensaje = '';

// if (perfil === ''){
//     mensage = 'Debe especificar el perfil del usuario';
// }else if (perfil === 'administrador' || perfil === 'Administrador' || perfil === 'ADMINISTRADOR'){
//     mensage = 'Usted tiene todos los privilegios de uso del sistema';
// }else if (perfil === 'asistente' || perfil === 'Asistente' || perfil === 'ASISTENTE') {
//     mensage = 'Usted sólo tiene permisos de registrar, modificar y consultar datos';
// }else if (perfil === 'invitado' || perfil === 'Invitado' || perfil === 'INVITADO') {
//     mensage = 'Usted sólo tiene permisos de consultar datos';
// }else {
//     mensage = 'Debe especificar un perfil válido';
// }

switch (perfil.toLowerCase()) {
    case '':
        mensaje = 'Debe especificar el perfil del usuario';
        break;
    case 'administrador':
        mensaje = 'Usted tiene todos los privilegios de uso del sistema';
        break;
    case 'asistente':
        mensaje = 'Usted sólo tiene permisos de registrar, modificar y consultar datos';
        break;
    case 'invitado':
        mensaje = 'Usted sólo tiene permisos de consultar datos';
        break;
    default:
        mensaje = 'Debe especificar un perfil válido';
        break;
}

console.log(mensaje);