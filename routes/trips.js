var express = require('express');
var router = express.Router();
const moment = require('moment')

require('../connection');
const Trip = require('../models/trips');

// const today = moment().startOf('day')
// const foo = moment(today).startOf('day').toDate()
// console.log({ today: foo });



/* GET home page. */
router.post('/trips', async function(req, res, next) {
  const { departure, arrival, date } = req.body
  
  if (departure && arrival && !date) {
    const result = await Trip.find({ departure, arrival })
    console.log({result});
    res.json({result})
  } else {
    res.json({ result: false })
  }
    
});


module.exports = router;
