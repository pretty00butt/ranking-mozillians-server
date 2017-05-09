var express = require('express');
var models = require('../models')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Pontoon.findAll({
    include: [{
      model: models.User
    }]
  })
  .then(function (pontoons) {
    res.send(pontoons)
  })
})

module.exports = router
