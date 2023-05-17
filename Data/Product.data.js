const Product = require ('../Models/Product.model');

const getProduct = async () => {
    return await Product.find({});
};

const createProduct = async (newProduct) => {
    return await new Product(newProduct).save();
};

const findProduct = async (id) => {
    return await Product.findOne({ _id: id });
};

const updateProduct = async (id, patchProduct) => {
    return await Product.findOneAndUpdate({ _id: id }, { $set: patchProduct }, { new: true, runValidators: true });
};

const deleteProduct = async (id) => {
    return await Product.findOneAndDelete({ _id: id });
};

module.exports = { getProduct, createProduct, findProduct, updateProduct, deleteProduct };