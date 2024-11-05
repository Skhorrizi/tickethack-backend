const mongoose = require('mongoose');

const basketSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    basketId: String
});

const Basket = mongoose.model('baskets', basketSchema);

module.exports = Basket;