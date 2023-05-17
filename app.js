const express = require('express');
const connectDB = require('./initDB');
const httpErrors = require('http-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

connectDB()
    .then(() => {
        console.log('MongoDB è connesso');
        app.listen(process.env.PORT, () => {
            console.log('Server aperto nella porta ' + process.env.PORT);
        })
    })
    .catch(err => console.log(err.message));

const appRoute = require('./Routes/App.route');
app.use('/', appRoute);

app.use((req, res, next) => {
    next(httpErrors(404, 'Non trovato'));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});