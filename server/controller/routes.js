var path = require('path');
var models = require('./../models');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('redux_shopping_cart', 'jaredthomas', '', {
  host: 'localhost',
  dialect: 'postgres',
});

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

	app.get('/api/signed-in', (req, res, done) => {
		if(req.user){
			return res.json({user: req.user})
		}
		res.json({no_user: 'no user signed in'})
	})

	app.get('/api/get-products', (req, res) => {
		models.Product.findAll({}).then((products) => {
			res.json(products)
		})
	});

	app.post('/api/buy/:product_id', (req, res) => {
		models.Cart.create({
			user_id: req.body.user_id, 
			product_id: req.params.product_id
		}).then((results) => {
			res.json({success: results})
		}).catch((err) => {
			res.json({error: err})
		})
	});

	app.get('/api/get-cart', (req, res) => {
		models.Cart.findAll(
			{
				where: 
				{
					user_id: req.user.id
				}
			}
		).then((results) => {
			var productIds = results.map(r => parseInt(r.product_id));
	        sequelize.query("SELECT * FROM \"Products\" WHERE id IN (" + productIds + ")", { type: sequelize.QueryTypes.SELECT})
	        .then(products => { 
	        	res.json(products);
	        }).catch(err => {
	        	res.json(err);
	        })
		}).catch((err) => {
			res.json({error: err})
		})
	});

	app.get('*', (req,res) => {
		res.sendFile(path.join(__dirname, '../../client/public/index.html'));
	});
}