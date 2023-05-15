const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator:
              function(name) {
                return name.length >= 2;
              }
          }
    }
});

ProductSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;