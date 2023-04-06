require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const authenticationMiddleware = require('./middlewares/authentication');

const app = express();

app.use(session({
    secret: process.env.SECRET || 'SECRET'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(authenticationMiddleware);
// End Middlewares

// Routes
app.use('/', mainRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});