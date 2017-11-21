var express = require('express');
var router = express.Router();

// get home page
router.get('/', function(req, res, next) {
  res.render('index');
});

// using multer
var multer  = require('multer');

var upload = multer({ dest: 'public/images/' });

//var storage = multer.diskStorage({
//	destination: function (req, file, cb) {
//		cb(null,'public/images/')
//	},
//	filename: function (req, file, cb) {
//		cb(null,Date.now() + file.originalname );
//	}
//});

//var upload = multer({ storage:storage});

// get seller page

var listings = require('../models/Listings');

router.get('/sell', function(req, res, next) {
  res.render('sell');
});

router.post('/sell', function (req, res) {
   var postData  = req.body;
   res.json(req.body);

//   listings.postListings(function(err, data) {
//   	if (err) {
//            data = [];
//        }
//        res.render('sell', { data: data });
//    });

});

//router.post('/sell', upload.single('myimage'), function(req, res, next) {
//    res.json(req.files);
//});

// using file-upload
//var fileUpload = require('express-fileupload');

//router.use(fileUpload());

//router.post('/sell', function(req, res) {
//  if (!req.files) {
//    return res.status(400).send('No files were uploaded.');
//        } else {
  // The name of the input field (i.e. "file") is used to retrieve the uploaded file
//  var file = req.files.file;
//  var extension = path.extname(file.name);

//        if(extension !== ".png" && extension !== ".gif" && extension !== ".jpg") {
//                res.send("Only images are allowed");
//        }else {

  // Use the mv() method to place the file somewhere on your server
//  file.mv(__dirname+"public/images"+file.name, function(err) {
//    if (err) {
//      return res.status(500).send(err);
//         }else {
//    res.send('File uploaded!');
//        }
//  });
//        }
//}
//});

// get about page
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

// get search page
var listings = require('../models/Listings');

router.get('/search', function(req, res, next) {

	listings.getListingsBySearch(req.query.q, function(err, data) {
		if (err) {
			data = [];
		}
		res.render('search/search', { data: data });
	});
});

router.get('/listing/:id', function(req, res, next) {
  res.render('search/propertyDetail');
});

module.exports = router;
