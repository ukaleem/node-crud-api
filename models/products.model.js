const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        price: {
            type: Number,
            required: [true, 'price is required'],
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required']
        }
    },
    {
            timestamps: true
    }

);

const product = mongoose.model('Products',productSchema);
module.exports = product;