module.exports = function(app) {
  var index = require('../controllers/index.server.controller');

  //routing for get request to root folder
  app.get('/', index.render);
};