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
		sql += "LOWER(City) LIKE LOWER('%" + q + "%')";
	db.runquery(sql,cb);
};

//exports.getAllImages =function(cb) {
//        var sql = "SELECT * FROM trn_image ";
//        db.runquery(sql,cb);
//};

