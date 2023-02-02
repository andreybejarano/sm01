const express = require('express');
const expressSession = require('express-session');

const mainRoutes = require('./routes/main');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({ secret: 'SECRET' }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en: http://localhost:3000');
});