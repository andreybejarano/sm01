/**
 * 
 * @param {string} url Endpoint a consultar
 * @param {object} options
 * @param {string} options.method Metodo POST, GET, PUT, PATCH O DELETE
 * @param {object} options.body Body que se envia para metodo POST, PUT, PATCH
 * @description Metodo que se abstrae de fetch para hacer request
 * @returns {Promise} 
 */
function request(url, options) {
    return new Promise((resolve, reject) => {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            }
        };
        options.body = options.body ? JSON.stringify(options.body) : undefined;
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}