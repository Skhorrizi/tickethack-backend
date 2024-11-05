var express = require('express');
var router = express.Router();
require('../connection');
const Trip = require('../models/trips');

/* GET home page. */
router.get('/trips', function(req, res, next) {
  console.log(Trip);
  
    Trip.find().then((data) => {
      console.log({data});
      
      res.json({data})
    })  
});


module.exports = router;
