const mongoose = require('mongoose');
const httpErrors = require('http-errors');
const sanitize = require('mongo-sanitize');
const dataOrder = require('../Data/Order.data');
const Order = require('../Models/Order.model');

module.exports = {
    getOrders : async (req, res, next) => {
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
            const result = await dataOrder.getOrders(query, 'products', 'users');
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            };
            next(error);
        }
    },
    createOrder : async (req, res, next) => {
        try {
            const postOrder = { ...req.body, file: req.file };
            const newOrder = await new Order(postOrder).save();
            const result = await dataOrder.createOrder(newOrder._id, 'products', 'users');
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            };
            if (error instanceof mongoose.Error.ValidationError) {
                return next(httpErrors(400, error.message));
            };
            next(error);
        };
    },
    findOrder : async (req, res, next) => {
        const { id } = req.params;
        try {
            const result = await dataOrder.findOrder(id, 'products', 'users');
            if (!result) {
                return next(httpErrors(404, 'Ordine non trovato'));
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
    updateOrder : async (req, res, next) => {
        const { id } = req.params;
        try {
            const patchOrder = { ...req.body, file: req.file };
            const result = await dataOrder.updateOrder(id, patchOrder, 'products', 'users');
            if (!result) {
                return next(httpErrors(404, 'Ordine non trovato'));
            };
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            };
            if (error instanceof mongoose.Error.ValidationError) {
                return next(httpErrors(400, error.message));
            };
            next(error);
        }
    },    
    deleteOrder : async (req, res, next) => {
        const { id } = req.params;
        try {
            const result = await dataOrder.deleteOrder(id, 'products', 'users');
            if (!result) {
                    return next(httpErrors(404, 'Ordine non trovato'));
            };
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            }
            next(error);
        }
    }
}