var express = require ('express');
var router = express.Router();
var listings = require('../models/Listings');

router.get('/:id', function(req, res, next) {

//  res.json(req.params.id)

  res.render('search/listingDetails');

//   listings.getlistingDetails(function(err, data) {
//      if (err) {
//            data = [];
//        }
//        res.render('search/listingDetails', { data: data });
//    });

});

module.exports = router;
