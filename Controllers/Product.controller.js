const mongoose = require('mongoose');
const handlingError = require('http-errors');

const Product = require ('../Models/Product.model');

module.exports = {
    getAllProducts : async (req, res, next) => {
        try {
            return await Product.find({}).then(result => res.send(result));
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    postProduct : async (req, res, next) => {
        try {
            const newProduct = { ...req.body, file: req.file };
            return await new Product(newProduct).save().then(result => res.send(result));
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.Error.ValidationError) {
                return next(handlingError(400, "Il nome dev'essere composto da almeno due caratteri"));
            };
        next(error);
        }
    },
    getProductById : async (req, res, next) => {
        const { id } = req.params;
        try {
            return await Product.findOne({ _id: id })
            .then(getProduct => {
                if (!getProduct) {
                    return next(handlingError(404, 'Prodotto non trovato'));
                };
                res.send(getProduct);
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            };
            next(error);
        }
    },
    patchProduct : async (req, res, next) => {
        const { id } = req.params;
        try {
            const patchProduct = { ...req.body, file: req.file };
            return await Product.findOneAndUpdate({ _id: id }, { $set: patchProduct }, { new: true, runValidators: true })
            .then(patchProduct =>{
                if (!patchProduct) {
                    return next(handlingError(404, 'Prodotto non trovato'));
                };
                res.send(patchProduct)
            })
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(handlingError(400, 'Id non valido'));
            } else if (error instanceof mongoose.Error.ValidationError) {
                return next(handlingError(400, "Il nome dev'essere composto da almeno due caratteri"));
            };
            next(error);
        }
    },
    deleteProduct : async (req, res, next) => {
        const { id } = req.params;
        try {
            return await Product.findOneAndDelete({ _id: id })
            .then(deleteProduct => {
                if (!deleteProduct) {
                    return next(handlingError(404, 'Prodotto non trovato'));
                };
                res.send(deleteProduct);
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