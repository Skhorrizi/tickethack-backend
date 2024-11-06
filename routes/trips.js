var express = require('express');
var router = express.Router();
const moment = require('moment')

require('../connection');
const Trip = require('../models/trips');

// const foo = moment(today).startOf('day').toDate()
// console.log({ today: foo });



/* GET home page. */
router.post('/trips', async function(req, res, next) {
  const { departure, arrival, date } = req.body
  
  const formatedDatestart = moment(date).startOf('day').toDate()
  const formatedDateend = moment(date).endOf('day').toDate()
  console.log(formatedDatestart, formatedDateend);

  if (departure && arrival && date) {
    const tripsFound = await Trip.find({
      departure, arrival, date: {
        $gte: formatedDatestart,
        $lte: formatedDateend
      }
    })
    
    if (tripsFound) {
      res.json({result: true, trips: tripsFound})
    } else {
      res.json({ result: false, error: 'No trips were found' })
    }
    
  } else {
    res.json({ result: false, error: 'You need to enter vaues in departure, arrival and date' })
  }
    
});


module.exports = router;
