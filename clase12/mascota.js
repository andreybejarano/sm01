const uuid = require('uuid');

const mascota = {
    id: uuid.v4(),
    name: 'Jenkins',
    color: 'Blanco con negro',
    age: 5,
    type: 'Perro',
    toys: ['Pelota', 'Hueso', 'Frisby'],
    play: function (toy) {
        if (this.toys.includes(toy)) {
            return 'Estoy jugando con ' + toy;
        }
        return 'No tengo un/a ' + toy + ', compramelo';
    }
};

module.exports = mascota;