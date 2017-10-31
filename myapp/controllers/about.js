var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.render('about/about');
});

router.get('/about/vipul', function(req, res, next) {
  res.render('about/vipul');
});

router.get('/about/mohan', function(req, res, next) {
  res.render('about/mohan');
});

router.get('/about/savan', function(req, res, next) {
  res.render('about/savan');
});

router.get('/about/aishwarya', function(req, res, next) {
  res.render('about/aishwarya');
});

router.get('/about/larry', function(req, res, next) {
  res.render('about/larry');
});

router.get('/about/udara', function(req, res, next) {
  res.render('about/udara');
});

module.exports = router;
