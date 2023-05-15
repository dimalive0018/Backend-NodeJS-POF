const mongoose = require('mongoose');
const handlingError = require('http-errors');
const sanitize = require('mongo-sanitize');

const Order = require('../Models/Order.model');

module.exports = {
    getAllOrder : async (req, res, next) => {
        try {
            const { startDate, endDate, products } = req.query;
            let query = {};
            if (startDate || endDate) {
                if (startDate && endDate) {
                    query.entryDate = { $gte: sanitize(startDate), $lte: sanitize(endDate) }
                } else if (startDate) {
                    query.entryDate = { $gte: sanitize(startDate) };
                } else if (endDate) {
                    query.entryDate = { $lte: sanitize(endDate) };
                };
            };
            if (products) {
                query.products = sanitize(products);
            };
            return await Order.find(query).populate('products').populate('users').then(result => res.send(result));
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            next(error);
        }
    },
    postOrder: async (req, res, next) => {
        try {
            const postOrder = { ...req.body, file: req.file };
            const newOrder = await new Order(postOrder).save();
            return await Order.findById(newOrder._id).populate('products').populate('users').then(result => res.send(result));
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            if (error instanceof mongoose.Error.ValidationError) {
                return next(handlingError(400, error.message));
            };
            next(error);
        };
    },
    getOrderById : async (req, res, next) => {
        const { id } = req.params;
        try {
            return await Order.findOne({ _id: id }).populate('products').populate('users').then(getOrder => {
                if (!getOrder) {
                    return next(handlingError(404, 'Ordine non trovato'));
                };
                res.send(getOrder);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            next(error);
        }
    },
    patchOrder: async (req, res, next) => {
        const { id } = req.params;
        try {
            const patchOrder = { ...req.body, file: req.file };
            return await Order.findOneAndUpdate({ _id: id }, { $set: patchOrder }, { new: true, runValidators: true }).populate('products').populate('users').then(patchOrder => {
                if (!patchOrder) {
                    return next(handlingError(404, 'Ordine non trovato'));
                };
                res.send(patchOrder);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            if (error instanceof mongoose.Error.ValidationError) {
                return next(handlingError(400, error.message));
            };
            next(error);
        }
    },    
    deleteOrder : async (req, res, next) => {
        const { id } = req.params;
        try {
            return await Order.findOneAndDelete({ _id: id }).populate('products').populate('users').then(deleteOrder => {
                if (!deleteOrder) {
                    return next(handlingError(404, 'Ordine non trovato'));
                };
                res.send(deleteOrder);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            }
            next(error);
        }
    }
}