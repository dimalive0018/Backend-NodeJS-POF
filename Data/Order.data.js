const Order = require('../Models/Order.model');

const getOrders = async (query, products, users) => {
    return await Order.find(query).populate(products).populate(users);
};

const newOrder = async (postOrder) => {
    return await new Order(postOrder).save();
};

const createOrder = async (newOrder, products, users) => {
    return await Order.findById(newOrder).populate(products).populate(users);
};

const findOrder = async (id, products, users) => {
    return await Order.findOne({ _id: id }).populate(products).populate(users);
};

const updateOrder = async (id, patchOrder, products, users) => {
    return await Order.findOneAndUpdate({ _id: id }, { $set: patchOrder }, { new: true, runValidators: true }).populate(products).populate(users);
};

const deleteOrder = async (id, products, users) => {
    return await Order.findOneAndDelete({ _id: id }).populate(products).populate(users);
};

module.exports = { getOrders, newOrder, createOrder, findOrder, updateOrder, deleteOrder };