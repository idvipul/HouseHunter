var express = require ('express');
var router = express.Router();
var listings = require('../models/Listings');

router.get('/:id', function(req, res, next) {

	let id = req.params.id;
//	res.json(id)

        listings.getlistingDetails(id, function(err, data) {
                if (err) {
                        data = [];
                }
//                res.render('search/search', { data: data });

//        res.json( {data: data} );

                res.render('search/listingDetails', { data: data });
        });


//	var location = listings.getlistingDetails(id, function(err, data){
//		if(err){
//		  data = [];
//		}		
//      	  res.render('search/listingDetails', { data: data });
//	});

//  res.json(req.params.id)

//  res.render('search/listingDetails');

//  res.render('search/listingDetails', { data: data });

});

module.exports = router;
