var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var Models = require('../models');
// var Place = Models.Place;
var Hotel = Models.Hotel;
var Activity = Models.Activity;
var Restaurant = Models.Restaurant;

router.get('/', function(req, res, next) {
	//kick off async db calls for all data
	var hotels = Hotel.find({}).exec(),
		restaurants = Restaurant.find({}).exec(),
		activities = Activity.find({}).exec();

	//user bluebird's "all" method to sync results
	Promise.all([hotels, restaurants, activities])
	.then(function(allResults) {
  // res.send(allResults[0])
   // console.log(allResults[0])
		res.render('index', { hotels: allResults[0], restaurants: allResults[1], activities: allResults[2]});
       // res.render('index');
	}).then(null, next)
});




module.exports = router;