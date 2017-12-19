module.exports = (req, res, next) => {
	session = req.session
	if (!req.session.uid) {
	// res.render('sell');
		res.redirect('/fa17g02/login', {login: true});
	}
	else {
		next();
	}
	// if(req.isAuthenticated()){
	// 	 next();
	// } else {
	// }
}
