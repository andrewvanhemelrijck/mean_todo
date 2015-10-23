exports.render = function(req, res) {
  //res.render uses templating/view engine set in config file (config/express.js)
  res.render('index', {
    title: 'todo list',
    user: JSON.stringify(req.user)
  });
};