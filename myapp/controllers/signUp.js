var express = require('express');
var router = express.Router();
var auth = require('../models/authentication');
var db = require('../helpers/db')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('signUp');
});

router.post('/', function (req, res) {
        auth.postUsers(req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.accountType, function(err, data){
        if (err) {
            data = [];
        }
        res.json(req.body)
//        res.redirect("/fa17g02/")
        });
  });

module.exports = router;
