window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    // Solucion ejercitacion de clase45
    const logo = document.getElementById('logoDH');
    logo.addEventListener('mouseenter', () => {
        if (modo) {
            body.style.backgroundColor = '#ffffff';
            body.classList.remove('fondoMoviesList');
        } else {
            body.style.backgroundColor = '#7f7f7f';
            body.classList.add('fondoMoviesList');
        }
        modo = !modo;
    });
}