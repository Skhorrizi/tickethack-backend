const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    bookingId: String,
    isBooked: Boolean,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;