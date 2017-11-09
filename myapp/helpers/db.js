var mysql = require('mysql');
//var fs = require("fs");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'fa17g02',
  password: 'csc648fa17g02',
  database: 'fa17g02'
});

exports.runquery = function(sql, cb) {
	connection.query(sql, function(err, rows, fields) {
		cb(err, rows);
	});
};

//var dog = {
//    img: fs.readFileSync("../public/images/downtown.jpg"),
//    file_name: 'Dog'
//};
 
//var cat = {
//    img: fs.readFileSync("../public/images/fine_arts.jpg"),
//    file_name: 'Cat'
//};
 
//var query = connection.query('INSERT INTO trn_image SET ?', dog, function(err,
//    result) {
//    console.log(result);
//});
 
//query = connection.query('INSERT INTO trn_image SET ?', cat, function(err,
//    result) {
//    console.log(result);
//});

