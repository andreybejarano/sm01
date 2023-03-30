window.onload = () => {
    const form = document.querySelector('form.formulario');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        request('http://localhost:3031/api/movies/create', {
            method: 'POST',
            body: {
                title: form.title.value,
                rating: form.rating.value,
                awards: form.awards.value,
                release_date: form.release_date.value,
                length: form.length.value
            }
        })
            .then(data => {
                if (data.data) {
                    location.href = '/home.html';
                }
            })
            .catch(err => console.log(err));
    });
}