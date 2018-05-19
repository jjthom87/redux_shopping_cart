var path = require('path');
var models = require('./../models');

module.exports = (app, passport) => {
	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, '../../client/public/index.html'));
	});

	app.post('/api/sign-up', (req,res, next) => {
		passport.authenticate('local-signup', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.status(401).json({ success : false, message : 'authentication failed', info: info });
		    }
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });        
			});
	  	})(req, res, next);
	});

	app.post('/api/sign-in', (req, res, next) => {
		passport.authenticate('local-signin', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.status(401).json({ success : false, message : 'authentication failed', info: info });
		    }
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });        
			});
	  	})(req, res, next);
	});

	app.get('/api/signed-in', (req, res) => {
		if(req.user){
			res.json({user: req.user})
		}
	})

	app.get('/api/get-products', (req, res) => {
		models.Product.findAll({}).then((products) => {
			res.json(products)
		})
	})

	app.get('*', (req,res) => {
		res.sendFile(path.join(__dirname, '../../client/public/index.html'));
	});
}