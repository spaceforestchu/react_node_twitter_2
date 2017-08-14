var mongoose = require('mongoose');
var moment = require('moment');

var TweetsSchema = new mongoose.Schema({
  tweets: {type: Array, default: []},
  timestamp: {type: String, default: moment().format('MMMM Do YYYY h:mm:ss a')},
});


module.exports = mongoose.model('TweetsSchema', TweetsSchema);
