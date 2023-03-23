window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    // Ejercitacion clase45
    titulo.addEventListener('mouseenter', () => {
        const colors = ['red', 'yellow', 'blue', 'green', 'violet'];
        const indexColorRandom = Math.floor(Math.random() * colors.length);
        titulo.style.color = colors[indexColorRandom];
    });

    // Ejercitacion clase45 microdesafio 2
    const txfTitulo = document.getElementById('titulo');
    let estadoSecreto = 0;
    txfTitulo.addEventListener('keypress', (event) => {
        const palabraSecreta = 'secreto';
        if (palabraSecreta[estadoSecreto] === event.key) {
            estadoSecreto++;
        } else {
            estadoSecreto = 0;
            alert('NO VA!');
        }
        if (estadoSecreto === palabraSecreta.length) {
            estadoSecreto = 0;
            alert('SECRETO MAGICO');
        }
        // if (estadoSecreto === 0 && event.key === 's') {
        //     estadoSecreto = 1;
        // } else if (estadoSecreto === 1 && event.key === 'e') {
        //     estadoSecreto = 2;
        // } else if (estadoSecreto === 2 && event.key === 'c') {
        //     estadoSecreto = 3;
        // } else if (estadoSecreto === 3 && event.key === 'r') {
        //     estadoSecreto = 4;
        // } else if (estadoSecreto === 4 && event.key === 'e') {
        //     estadoSecreto = 5;
        // } else if (estadoSecreto === 5 && event.key === 't') {
        //     estadoSecreto = 6;
        // } else if (estadoSecreto === 6 && event.key === 'o') {
        //     estadoSecreto = 0;
        //     alert('SECRETO MAGICO');
        // } else {
        //     estadoSecreto = 0;
        //     alert('NO VA!');
        // }
    });
}