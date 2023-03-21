const body = document.querySelector('body');
const main =  document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const paragraphs  = document.querySelectorAll('p'); 

let name = prompt('Ingrese su nombre') || 'invitado';

h2.innerText += ' ' + name;
h2.style.textTransform = 'uppercase';
a.style.color = '#E51B3E';

const setBackgroundColor = confirm('¿Desea colocar un fondo depantalla?');
if (setBackgroundColor) {
    body.classList.add('fondo');
}

// for (let index = 0; index < paragraphs.length; index++) {
//     if (index % 2 === 0) {
//         paragraphs[index].classList.add('destacadoPar');
//     } else {
//         paragraphs[index].classList.add('destacadoImpar');
//     }
// }
paragraphs.forEach((p, index) => {
    if (index % 2 === 0) {
        p.classList.add('destacadoPar');
    } else {
        p.classList.add('destacadoImpar');
    }
});

main.style.display = 'block';