const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = () => {
    mongoose.connect(process.env.MONGO_DB_URL,
        {
            dbName: process.env.DB_NAME,
            user: process.env.USER,
            pass: process.env.PASS
        }
    )
    .then(() => {
        console.log('MongoDB è connesso')
    })
    .catch(err => console.log(err.message));

    mongoose.connection.on('connected', () => {
        console.log('Mongoose è connesso')
    });

    mongoose.connection.on('error', err => {
        console.log(err.message)
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose è disconesso')
    });
}