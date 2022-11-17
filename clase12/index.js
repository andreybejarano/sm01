const mascota = require('./mascota');

const notToy = mascota.play('disco');
const hasToy = mascota.play('Pelota');

console.log(mascota.id);
console.log(notToy);
console.log(hasToy);