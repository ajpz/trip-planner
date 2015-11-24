var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
mongoose.connect('mongodb://localhost/seed'); 
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'mongodb connection error:')); 

var PlaceSchema = new Schema({
	address: { type: String, required: true },
	city: { type: String, required: true }, 
	state: { type: String, required: true }, 
	phone: { type: String, required: true }, 
	location: { type: [Number], required: true }
}); 

var HotelSchema = new Schema({
	name: { type: String, required: true},
	place: { type: [PlaceSchema], required: true},
	num_stars: { type: Number, required: true},
	amenities: { type: String, required: true}
})

var ActivitySchema = new Schema({
	name: { type: String, required: true},
	place: { type: [PlaceSchema], required: true},
	age_range: { type: String, required: true}
})

var RestaurantSchema = new Schema({
	name: { type: String, required: true},
	place: { type: [PlaceSchema], required: true},	
	cuisines: { type: String, required: false},
	price: { type: Number, required: true}
})

var Place = mongoose.model('Place', PlaceSchema),
	Hotel = mongoose.model('Hotel', HotelSchema), 
	Activity = mongoose.model('Activity', ActivitySchema), 
	Restaurant = mongoose.model('Restaurant', RestaurantSchema); 


module.exports = {
	Place : Place,
	Hotel : Hotel, 
	Activity: Activity, 
	Restaurant: Restaurant
}