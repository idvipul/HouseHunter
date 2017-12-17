var db = require('../helpers/db');

exports.getAllListings = function (cb) {
    var sql = "SELECT * FROM listing ";
    db.runquery(sql, cb);
};


//Insert into 


//exports.postListings = function (address, city, state, zip, ImageName, price,bedrooms, bathrooms, cb) {
//var sql = 'INSERT INTO listing( City,State,Zip,Image,Address,Price, Bedrooms, Bathrooms) VALUES ("'+city+'","'+state+'" ,'+zip+', "'+ImageName+'","'+address+'","'+price+'", '+bedrooms+', '+ bathrooms + ')';
//db.runquery(sql,cb);

// if account type=1 insert into buyer



//else into seller
