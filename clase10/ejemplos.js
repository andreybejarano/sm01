const fs = require('fs');

const usersFile = fs.readFileSync(__dirname + '/obj.json', 'utf-8');
const users = JSON.parse(usersFile);

const adults = users.filter((user) => {
    return user.age >= 18;
});

const men = users.filter((user) => {
    return user.gender === 'M';
});

const women = users.filter((user) => {
    return user.gender === 'F';
});

const idUsers = users.map((user) => {
    return {
        id: user.id, 
        name: user.name,
        gender: user.gender === 'M' 
            ? 'Hombre' 
            : user.gender === 'F'
                ? 'Mujer'
                : 'No binario' 
    };
});


console.log('Adultos', adults);

console.log('Hombres', men);

console.log('Mujeres', women);
console.log('IDs', idUsers);
