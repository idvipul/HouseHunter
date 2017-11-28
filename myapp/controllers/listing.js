var express = require('express');
var router = express.Router();
var listings = require('../models/Listings');

router.get('/:id', function (req, res, next) {

    let id = req.params.id;
    listings.getlistingDetails(id, function (err, data) {
        if (err) {
            data = [];
        }
        res.render('search/listingDetails', {data: data});
    });

});

module.exports = router;
