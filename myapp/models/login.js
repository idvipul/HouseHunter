var db = require('../helpers/db');
const bcrypt = require('bcrypt');

exports.checkLogin = function(email, password, cb){
//hash  = bcrypt.hash(password, 10, function(err, hash) {
var sql = 'SELECT * FROM user where Email = "'+email+'" and Password = "'+password+'";';
db.query(sql,cb)
};
