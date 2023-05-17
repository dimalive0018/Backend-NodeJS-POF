const mongoose = require('mongoose');
const httpErrors = require('http-errors');
const dataUser = require('../Data/User.data');

module.exports = {
    getUsers : async (req, res, next) => {
        try {
            const result = await dataUser.getUsers();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    createUser : async (req, res, next) => {
        try {
            const newUser = { ...req.body, file: req.file };
            const result = await dataUser.createUser(newUser);
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.Error.ValidationError) {
                return next(httpErrors(400, error.message));
            } else if (error.code === 11000) {
                return next(httpErrors(422, 'Email già presente in database'));
            };
            next(error);
        }
    },
    findUser : async (req, res, next) => {
        const { id } = req.params;
        try {
            const result = await dataUser.findUser(id);
            if (!result) {
                return next(httpErrors(404, 'Utente non trovato'));
            };
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            };
            next(error);
        }
    },
    updateUser : async (req, res, next) => {
        const { id } = req.params;
        try {
            const patchUser = { ...req.body, file: req.file };
            const result = await dataUser.updateUser(id, patchUser);
            if (!result) {
                return next(httpErrors(404, 'Utente non trovato'));
            };
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            } else if (error.code === 11000) {
                return next(httpErrors(422, 'Email già presente in database'));
            } else if (error instanceof mongoose.Error.ValidationError) {
                return next(httpErrors(400, error.message));
            };
            next(error);
        }
    },
    deleteUser : async (req, res, next) => {
        const { id } = req.params;
        try {
            const result = await dataUser.deleteUser(id);
            if (!result) {
                return next(httpErrors(404, 'Utente non trovato'));
            };
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            };
            next(error);
        }
    }
}