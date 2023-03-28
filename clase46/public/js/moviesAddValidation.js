window.onload = function () {
    const titulo = document.querySelector('.moviesAddTitulo');
    const formulario = document.querySelector('#formulario');
    const article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    const form = document.querySelector('.form');
    form.title.focus();
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element => {
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        });
        const errors = [];
        if (!form.title.value) {
            errors.push({ name: 'title', message: 'El campo Titulo no puede estar vacio' });
            form.title.classList.add('is-invalid');
        } else {
            form.title.classList.remove('is-invalid');
            form.title.classList.add('is-valid');
        }
        if (form.rating.value <= 0 || form.rating.value > 10) {
            errors.push({ name: 'rating', message: 'El campo Calificacion no puede ser menor a cero ni mayor a diez' });
            form.rating.classList.add('is-invalid');
        } else {
            form.rating.classList.remove('is-invalid');
            form.rating.classList.add('is-valid');
        }
        if (form.awards.value <= 0 || form.awards.value > 10) {
            errors.push({ name: 'awards', message: 'El campo Premios no puede ser menor a cero ni mayor a diez' });
            form.awards.classList.add('is-invalid');
        } else {
            form.awards.classList.remove('is-invalid');
            form.awards.classList.add('is-valid');
        }
        if (!form.release_date.value) {
            errors.push({ name: 'release_date', message: 'El campo Fecha de creacion no puede estar vacio' });
            form.release_date.classList.add('is-invalid');
        } else {
            form.release_date.classList.remove('is-invalid');
            form.release_date.classList.add('is-valid');
        }
        if (form.length.value < 60 || form.length.value > 360) {
            errors.push({ name: 'length', message: 'El campo Duracion no puede ser menor a 60 ni mayor a 360' });
            form.length.classList.add('is-invalid');
        } else {
            form.length.classList.remove('is-invalid');
            form.length.classList.add('is-valid');
        }
        if (!form.genre_id.value) {
            errors.push({ name: 'genre_id', message: 'El campo genero no puede estar vacio' });
            form.genre_id.classList.add('is-invalid');
        } else {
            form.genre_id.classList.remove('is-invalid');
            form.genre_id.classList.add('is-valid');
        }
        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`);
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        });
        if (errors.length === 0) {
            form.submit();
        }
    });

    //-------------------DE REGISTRO DE PELÍCULAS------------------//    




}