var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* GET users listing. */
router.get('/:resource', function(req, res, next) {

  var resource = req.params.resource;
  var controller = controllers[resource];

  if (resource !== 'tweet') {
    res.json({confirmation: 'fail', resource: 'Invalid Resource'});
    return;
  }

  if (controller == null) {
    res.json({confirmation: 'fail', resource: 'Invalid Resource'});
    return;
  }
  
  controller.get(req.query).then(function(results) {
    //console.log(results[0].tweets);
    res.json({confirmation: 'success', results: results});
    return;
  }).catch(function(err) {
    res.json({confirmation: 'fail', message: err});
    return;
  });
});

router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource;
  var id = req.params.id;

  var controller = controllers[resource];

  controller.getById(id).then(function(result) {
    res.json({confirmation: 'success', result: result});
    return;
  }).catch(function(err) {
    res.json({confirmation: 'fail', message: 'Note Found'});
    return;
  });
});

router.post('/:resource', function(req, res, next) {
  var resource = req.params.resource;
  var data = req.body;
  var controller = controllers[resource];
  controller.post(data).then(function(result) {
    res.json({confirmation: 'success', result: result});
    return;
  }).catch(function(err) {
    res.json({confirmation: 'fail', message: err});
    return;
  });
});

router.put('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource;
  var id = req.params.id;
  var data = req.body;
  var controller = controllers[resource];

  controller.put(id, data).then(function(result) {
    res.json({confirmation: 'success', message: result});
    return;
  }).catch(function(err) {
    res.json({confirmation: 'fail', message: err});
    return;
  });
});

router.delete('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource;
  var id = req.params.id;
  var controller = controllers[resource];

  controller.delete(id).then(function(result) {
    res.json({confirmation: 'successfully deleted', message: result});
    return;
  }).catch(function(err) {
    res.json({confirmation: 'fail', message: err});
    return;
  });
});

module.exports = router;
