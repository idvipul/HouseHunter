var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('signUp');
});

router.post('/', function (req, res) {
        //sell.postListings(fields.price, function(err, data){
//        sell.postListings(fields.address, fields.city, fields.state, fields.zip, files.filetoupload.name,fields.price , fields.bedrooms, fields.bathrooms, function (err, data) {
//        if (err) {
//            data = [];
//        }
        res.json(req.body)
//        res.redirect("/fa17g02/")
//        });
//});
});


module.exports = router;
