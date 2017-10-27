var express = require ('express');
var router = express.Router();

var listings = require('../models/Listings');

router.get('/', function(req, res, next) {
	listings.getListingsBySearch(req.query.q, function(err, data) {
		if (err) {
			data = [];
		}
		res.render('search/search', { data: data });
		//res.render('about.html', {data: data});
	});
});

module.exports = router;
