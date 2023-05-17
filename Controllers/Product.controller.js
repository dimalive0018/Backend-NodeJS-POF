const mongoose = require('mongoose');
const httpErrors = require('http-errors');
const dataProduct = require('../Data/Product.data');

module.exports = {
    getProducts : async (req, res, next) => {
        try {
            const result = await dataProduct.getProduct();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    createProduct : async (req, res, next) => {
        try {
            const newProduct = { ...req.body, file: req.file };
            const result = await dataProduct.createProduct(newProduct);
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.Error.ValidationError) {
                return next(httpErrors(400, "Il nome dev'essere composto da almeno due caratteri"));
            };
        next(error);
        }
    },
    findProduct : async (req, res, next) => {
        const { id } = req.params;
        try {
            const result = await dataProduct.findProduct(id);
            if (!result) {
                return next(httpErrors(404, 'Prodotto non trovato'));
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
    updateProduct : async (req, res, next) => {
        const { id } = req.params;
        try {
            const patchProduct = { ...req.body, file: req.file };
            const result = await dataProduct.updateProduct(id, patchProduct);
            if (!result) {
                return next(httpErrors(404, 'Prodotto non trovato'));
            };
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(httpErrors(400, 'Id non valido'));
            } else if (error instanceof mongoose.Error.ValidationError) {
                return next(httpErrors(400, "Il nome dev'essere composto da almeno due caratteri"));
            };
            next(error);
        }
    },
    deleteProduct : async (req, res, next) => {
        const { id } = req.params;
        try {
            const result = await dataProduct.deleteProduct(id);
            if (!result) {
                return next(httpErrors(404, 'Prodotto non trovato'));
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