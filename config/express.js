var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session');

module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretWords'
  }));

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  //set templating/view engine and location
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  //require routing modules and pass app instance to them
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/users.server.routes.js')(app);
  require('../app/routes/todos.server.routes.js')(app);

  //set up public files location
  app.use(express.static('./public'));

  return app;
};