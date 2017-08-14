var Tweets = require('../models/Tweets');

module.exports = {
  get: function(params) {
    return new Promise(function(resolve, reject) {
      Tweets.find(params, function(err, tweets) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tweets);
        return;
      });
    });
  },

  getById: function(id) {
    return new Promise(function(resolve, reject) {
      Tweets.findById(id, function(err, tweet) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tweet);
        return;
      });
    });
  },

  post: function(params) {

    var tweets = {};
    tweets['tweets'] = params;

    return new Promise(function(resolve, reject) {
      Tweets.create(tweets, function(err, tweet) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tweet);
        return;
      });
    });
  },

  update: function(id, params) {
    return new Promise(function(resolve, reject) {
      Tweets.findByIdAndUpdate(id, param, function(err, tweet) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tweet);
        return;
      });
    });
  },
  delete: function(id) {
    return new Promise(function(resolve, reject) {
      Tweets.findByIdAndRemove(id, function(err, tweet) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tweet);
        return;
      });
    });
  }
}
