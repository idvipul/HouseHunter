var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var login = require('../models/login');
var formidable = require('formidable');
var bcrypt = require('bcrypt');
const saltRounds = 1;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('login');
});


router.post('/', function (req, res) {        
	//res.json(req.body);
	var hash1 = bcrypt.hash(req.body.password, saltRounds, function (err, hash) { 
        //login.checkLogin(req.body.email, hash, function(err, data){
	//if (err) {
        //    data = [];
        //}
	res.json(hash1)
//});

});
});
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(err, user);
 
});




module.exports = router;
