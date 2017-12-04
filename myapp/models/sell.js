var db = require('../helpers/db');

exports.postListings = function (address, city, state, zip, ImageName, cb) {
var sql = "INSERT INTO `listing`(`Address`,`City`, `State`, 'Zip', 'Image') VALUES ('address','city','state','ImageName' ,'zip')";
//var record = [address, city, state, zip, ImageName]

//db.quert("INSER INTO listing(Address, City, State, Zip, Image ) VALUES ?", [record], function (err, result, fiel

db.runquery(sql,cb);

};
