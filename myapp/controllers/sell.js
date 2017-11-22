var express = require('express');
var router = express.Router();
var listings = require('../models/Listings');

// using multer
var multer = require('multer');

var upload = multer({ dest: 'public/images/' });

//var storage = multer.diskStorage({
//      destination: function (req, file, cb) {
//              cb(null,'public/images/')
//      },
//      filename: function (req, file, cb) {
//              cb(null,Date.now() + file.originalname );
//      }
//});

//var upload = multer({ storage:storage});

router.get('/', function(req, res, next) {
  res.render('sell');
});

router.post('/', function (req, res) {
   var postData  = req.body;
     res.json(req.body.address+','+req.body.city+','+req.body.state+','+ req.body.zip);
//   res.json(req.body);

//   listings.postListings(function(err, data) {
//      if (err) {
//            data = [];
//        }
//        res.render('sell', { data: data });
//    });

});

//router.post('/', upload.single('myimage'), function(req, res, next) {
//    res.json(req.files);
//});

/*
 using file-upload
var fileUpload = require('express-fileupload');

router.use(fileUpload());

router.post('/', function(req, res) {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
        } else {
  // The name of the input field (i.e. "file") is used to retrieve the uploaded file
  var file = req.files.file;
  var extension = path.extname(file.name);

        if(extension !== ".png" && extension !== ".gif" && extension !== ".jpg") {
                res.send("Only images are allowed");
        }else {

  // Use the mv() method to place the file somewhere on your server
  file.mv(__dirname+"public/images"+file.name, function(err) {
    if (err) {
      return res.status(500).send(err);
         }else {
    res.send('File uploaded!');
        }
  });
        }
}
});
*/
                                                                                        
module.exports = router;
