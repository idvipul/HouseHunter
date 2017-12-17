var db = require('../helpers/db');

exports.getAllListings = function (cb) {
    var sql = "SELECT * FROM listing ";
    db.runquery(sql, cb);
};

exports.getListingsBySearch = function (q, cb) {
    var sql = "SELECT * FROM listing ";
    sql += "WHERE ";
    sql += "LOWER(State) LIKE LOWER('%" + q + "%') OR ";
    sql += "Zip LIKE '%" + q + "%' OR ";
    sql += "LOWER(Address) LIKE LOWER('%" + q + "%') OR ";
    sql += "LOWER(City) LIKE LOWER('%" + q + "%')";
    db.runquery(sql, cb);
};

exports.getlistingDetails = function (q, cb) {
    var sql = "SELECT * FROM listing ";
    sql += "WHERE id = '" + q + "'";
    db.runquery(sql, cb);
};
