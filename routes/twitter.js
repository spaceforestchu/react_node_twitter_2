var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var TweetController = require('../controllers/TweetController');
/* GET users listing. */

var twitterClient = function(action, query, callback) {
  return new Promise(function(resolve, reject){
    var client = new Twitter({
      consumer_key: '47an2D6usP8e2Bp1jjMcHQ3zl',
      consumer_secret: 'jXnMXWoBHjMCakPrucTn59Blu1HoSQZLFVLwljlbmwqeEfTsOT',
      access_token_key: '403190846-BBygiJJbqPVxMcKwPXLNx2BASMqbGpVu424X6pRI',
      access_token_secret: 'h18sATggnUS0MHJrXqF8KnTWrNwNHYfFaz4HtVEMkiHbI'
    });

    var params;
    var methods;
    var query_variable;

    if (action == 'timeline') {

       methods = 'statuses/user_timeline';
       query_variable = query;
       params = {
         screen_name: query_variable,
         count: 300
       };

    } else if (action == 'search') {

      methods = 'search/tweets';
      query_variable = query;
      params = {q: query_variable};

    }

    return client.get(methods, params, function(error, tweets, response) {
        if (error) {
          reject(error);
          return;
        }
        resolve(tweets);
        return;
      });
  });


}

router.get('/:action', function(req, res, next) {
  var actions = ['timeline', 'search'];
  var action = req.params.action;

  if (actions.indexOf(action) == -1) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid action. Please select search or timeline'
    });
    return;
  }

  var query;

  if (req.query.search != null) {
    query = req.query.search;
  }

  if(req.query.term != null) {
    query = req.query.term;
  }

  twitterClient(action, query)
    .then(function(response){
      TweetController.post(response)
        .then(function(response){
          res.json({
            confirmation: 'success',
            message: response
          });
        })
        .catch(function(err){
          res.json({
            confirmation: 'failure',
            message: error
          });
        })

    })
    .catch(function(error){
      res.json({
        confirmation: 'failure',
        message: error
      });
      return;
    });
});

module.exports = router;
