function getName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            return reject('El nombre es requerido');
        }
        return resolve(`Hola ${name}`);
    });
}

function getAge(age, name) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            return reject('Tenes que ser mayor de edad');
        }
        if (!name) {
            return reject('El nombre es requerido');
        }
        if (!age) {
            return reject('La edad es requerida');
        }
        return resolve(`La edad de ${name} es ${age}`);
    });
}

const userName = 'Pepito';
const userAge = 17;
getName('Pepito')
    .then((response) => {
        console.log(response);
        getAge(userAge, userName)
            .then(response => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(err);
    });

async function resolvePromise() {
    try {
        const responseAndrey = await getName(userName);
        console.log(responseAndrey);
        const responseWithOutName = await getAge(userAge, userName);
        console.log(responseWithOutName);
    } catch (error) {
        console.log(error);
    }
}

// resolvePromise();
