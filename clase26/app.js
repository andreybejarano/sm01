const express = require('express');

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
