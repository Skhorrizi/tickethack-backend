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
  const dates = req.body.dates
  for (let i = 0; i < dates.length; i++) {
    Booking.updateOne({ date: dates[i] }, { isBooked: true }).then(
      console.log('element a la date mise à jour')
    )
  }
  res.json({result: true})
});

router.delete('/cart/:date', function (req, res, next) {
  const date = new Date(req.params.date)
  console.log('DEBUG: ', req.params.date, date);

  Booking.deleteOne({ date })
    .then(() => {
      console.log('element supprimé')
      res.json({ result: true })
    })
})


/***********  ROUTE GET - BOOKING ************/

router.get('/booking', function (req, res, next) {
  Booking.find({ isBooked: true }).then(() => {
    res.json({ result: true, booking: Booking })
  })
})

module.exports = router;