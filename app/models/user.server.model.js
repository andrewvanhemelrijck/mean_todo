var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  username: {
    type: String,
    trim: true,
    unique: true
  },
  password: String,
  provider: String,
  providerID: String,
  todos: {}
});

//mongoose "pre" middleware that hashes password before saving
UserSchema.pre('save',
  function(next) {
    if (this.password) {
      var md5 = crypto.createHash('md5');
      this.password = md5.update(this.password).digest('hex');
    }

    next();
  }
);

//authenticate() method that takes the input password, hashes it, compares it to
//the saved hashed password, and returns the result
UserSchema.methods.authenticate = function(password) {
  var md5 = crypto.createHash('md5');
  md5 = md5.update(password).digest('hex');

  return this.password === md5;
};

//register User Schema
mongoose.model('User', UserSchema);