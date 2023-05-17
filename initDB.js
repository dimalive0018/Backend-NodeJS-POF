const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = () => {
    mongoose.connection.on('connected', () => {
        console.log('Mongoose è connesso');
    });

    mongoose.connection.on('error', err => {
        return console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        return console.log('Mongoose è disconesso');
    });

    return mongoose.connect(process.env.MONGO_DB_URL,
        {
            dbName: process.env.DB_NAME,
            user: process.env.USER,
            pass: process.env.PASS
        }
    );
};

module.exports = connectDB;