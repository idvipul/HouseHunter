var db = require('../helpers/db');

exports.getAllListings =function(cb) {
        var sql = "SELECT * FROM listing ";
        db.runquery(sql,cb);
};

//exports.getListingsBySearch = function (q, cb) {
//        var sql = 'SELECT * FROM listing WHERE City like \"%$' + q + '%\" OR ';
//	sql += 'State like \"%$' + q + '%\" OR';
//	sql += 'Zip like \"%$' + q + '%\" '
//        db.runquery(sql,cb);
//};

exports.getListingsBySearch = function (q, cb) {
	var sql = "SELECT * FROM listing ";
		sql += "WHERE ";
		sql += "LOWER(State) LIKE LOWER('%" + q + "%') OR ";
		sql += "Zip LIKE '%" + q + "%' OR ";
                sql += "LOWER(Address) LIKE LOWER('%" + q + "%') OR ";
		sql += "LOWER(City) LIKE LOWER('%" + q + "%')";
	db.runquery(sql,cb);
};

//var postData = require('../views/sell.ejs');

//exports.postListings = function (req, res, cb) {
//  var sql = "INSERT INTO `listing`(`Address`,`City`, `State`, 'Zip') VALUES ('"+req.body.address+"','"+req.body.city+"','"+req.body.state+"',,'"+req.body.zip+"')";
//        db.runquery(sql,cb);
//};
