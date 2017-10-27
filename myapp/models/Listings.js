var db = require('../helpers/db');

exports.getAllListings =function(cb) {
	var sql = "SELECT city, state, zip" 
	sql = "FROM listing";
	db.runquery(sql,db);
}

exports.getListingsBySearch = function (q, cb) {
	var sql = "SELECT city, state, zip";
		sql += "FROM listing";
		sql += "WHERE ";
		sql += "LOWER(state) LIKE LOWER('%" +q + "%') OR ";
		sql += "zip LIKE '%" + q + "%' OR";
		sql += "LOWER(city) LIKE LOWER('%" +q + "%')";
	db.runquery(sql, cb);
}
