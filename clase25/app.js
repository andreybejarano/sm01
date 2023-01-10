const express = require('express');

const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');

const app = express();

app.use(express.static('public'));

app.use('/', mainRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});