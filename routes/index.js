var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var Models = require('./models');
var Place = Models.Place;
var Hotel = Models.Hotel;
var Activity = Models.Activity;
var Restaurant = Models.Restaurant;

router.get('/', function(req, res, next) {

});




module.exports = router;