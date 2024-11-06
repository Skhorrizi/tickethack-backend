var express = require('express');
var router = express.Router();
const Booking = require('../models/booking');


/***********  ROUTE POST - CART ************/

router.post('/cart', function (req, res, next) {
  const date = new Date(req.body.date)

  const newCart = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date,
    price: Number(req.body.price),
    bookingId: req.body.bookingId,
    isBooked: false
  })
  newCart.save().then(newCart => {
    res.json({ result: true, newCart: newCart })
  });
});

/***********  ROUTE GET - CART ************/

router.get('/cart/:bookingId', function (req, res, next) {
  Booking.find({
    bookingId: req.params.bookingId,
    isBooked: false
  }).then((data) => {
    res.json({ result: true, carts: data })
  })
});



/***********  ROUTE POST - BOOKING ************/

router.post('/booking', function (req, res, next) {
  const newBooking = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
    bookingId: req.body.bookingId,
    isBooked: true
  })
    newBooking.save().then(newBooking => {
      res.json({ result: true, newBooking: newBooking })
    })
});


/***********  ROUTE GET - BOOKING ************/

router.get('/booking/:bookingId', function (req, res, next) {
  Booking.find({
    bookingId: req.params.bookingId,
    isBooked: true
  })
  res.json({ result: true, Booking: Booking })
})

module.exports = router;