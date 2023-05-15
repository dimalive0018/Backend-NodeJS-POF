const express = require('express');
const handlingError = require('http-errors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

require('./initDB')();

const appRoute = require('./Routes/App.route');
app.use('/', appRoute);

app.use((req, res, next) => {
    next(handlingError(404, 'Non trovato'));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});

app.listen(process.env.PORT, () => {
    console.log('Server aperto nella porta ' + process.env.PORT);
})