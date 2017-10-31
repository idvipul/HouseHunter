var express = require ('express');
var router = express.Router();

var listings = require('../models/Listings');

router.get('/search', function(req, res, next) {
	listings.getListingsBySearch(req.query.q, function(err, data) {
		if (err) {
			data = [];
		}
//		console.log(data);
		 res.render('search/search', { data: data });
console.log(data);		
	});
});

module.exports = router;
