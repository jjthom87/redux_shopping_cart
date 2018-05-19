var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var models = require('./models');
var passport = require('passport');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var app = express();
var PORT = process.env.PORT || 8000;

models.sequelize.sync();

app.use(express.static('./client/public'));

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(session({
	secret: 'redux_shopping_cart',
	store: new SequelizeStore({
		db: models.sequelize
 	}),
 	resave: true,
 	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

require('./controller/passport.js')(passport);
require('./controller/routes.js')(app, passport);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
