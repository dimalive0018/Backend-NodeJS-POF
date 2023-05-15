const mongoose = require('mongoose');
const handlingError = require('http-errors');

const User = require('../Models/User.model');

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            return await User.find({}).then(result => res.send(result));
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    postUser : async (req, res, next) => {
        try {
            const newUser = { ...req.body, file: req.file };
            return await new User(newUser).save().then(result => res.send(result));
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.Error.ValidationError) {
                return next(handlingError(400, error.message));
            } else if (error.code === 11000) {
                return next(handlingError(422, 'Email già presente in database'));
            };
            next(error);
        }
    },
    getUserById : async (req, res, next) => {
        const { id } = req.params;
        try {
            return await User.findOne({ _id: id }).then(getUser => {
                if (!getUser) {
                    return next(handlingError(404, 'Utente non trovato'));
                };
                res.send(getUser);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            next(error);
        }
    },
    patchUser : async (req, res, next) => {
        const { id } = req.params;
        try {
            const patchUser = { ...req.body, file: req.file };
            return await User.findOneAndUpdate({ _id: id }, { $set: patchUser }, { new: true, runValidators:true }).then(patchUser => {
                if (!patchUser) {
                    return next(handlingError(404, 'Utente non trovato'));
                };
                res.send(patchUser);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            } else if (error.code === 11000) {
                return next(handlingError(422, 'Email già presente in database'));
            } else if (error instanceof mongoose.Error.ValidationError) {
                return next(handlingError(400, error.message));
            };
            next(error);
        }
    },
    deleteUser : async (req, res, next) => {
        const { id } = req.params;
        try {
            return await User.findOneAndDelete({ _id: id }).then(deleteUser => {
                if (!deleteUser) {
                    return next(handlingError(404, 'Utente non trovato'));
                };
                res.send(deleteUser);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            next(error);
        }
    }
}