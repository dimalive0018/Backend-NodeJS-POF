const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
        validate: {
            validator:
                async function(id) {
                    return await mongoose.model('product').exists({ _id: id });
                },
            message: 'Product id non valido'
        }
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        validate: {
            validator:
                async function(id) {
                    return await mongoose.model('user').exists({ _id: id });
                },
            message: 'User id non valido'
        }
    }],
    entryDate: {
        type: String,
        required: true,
        validate: {
            validator: function(date) {
                const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}\/(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
                return regex.test(date);
            },
            message: 'Formato data non valido. Si prega di utilizzare gg-mm-aaaa/mm:hh.'
        }
    }
});

OrderSchema.set('toJSON', {
    transform: (doc, ret) =>{
        delete ret.__v;
        return ret;
    }
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;