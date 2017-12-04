var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');


var sell = require('../models/sell');

router.get('/', function (req, res, next) {
    res.render('sell');
});

router.post('/', function (req, res) {
	var form = new formidable.IncomingForm();
    	form.parse(req, function (err, fields, files) {
	//res.send(fields.address + ',' + fields.city + ',' + fields.state + ',' + fields.zip + ',' + files.filetoupload.name + ',' + files.filetoupload.path);
	var oldpath = files.filetoupload.path;
	var newpath = "public/images/" + files.filetoupload.name;
	fs.rename(oldpath, newpath, function (err) {
        	if (err) throw err;
      	});
	console.log(res.body)
	//sell.postListings(res, function (err, data) {
	
	sell.postListings(fields.address, fields.city, fields.state, fields.zip, files.filetoupload.name, function (err, data) {
	res.json(fields.address + ',' + fields.city + ',' + fields.state + ',' + fields.zip + ',' + files.filetoupload.name + ',' + files.filetoupload.path)
        if (err) {
            data = [];
        }
        //res.send('Uploaded Success');
	});
	

	});
	
});

/*
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
*/

module.exports = router;
