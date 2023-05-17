const User = require('../Models/User.model');

const getUsers = async () => {
    return await User.find({});
};

const createUser = async (newUser) => {
    return await new User(newUser).save();
};

const findUser = async (id) => {
    return await User.findOne({ _id: id });
};

const updateUser = async (id, patchUser) => {
    return await User.findOneAndUpdate({ _id: id }, { $set: patchUser }, { new: true, runValidators:true });
};

const deleteUser = async (id) => {
    return await User.findOneAndDelete({ _id: id });
};

module.exports = { getUsers, createUser, findUser, updateUser, deleteUser };