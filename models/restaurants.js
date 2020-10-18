const { Schema, model } = require('mongoose');
const { calcRating } = require('./methods/restaurantsMethods.js');

const { default_restaurants_profile } = require('../config');

const restaurantSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
		trim: true
	},

	password: String,

	// Address
	country: String,

	state: String,

	city: String,

	street: String,

	house_number: String,


	email: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},

	description: {
		type: String,
		default: "A new Restaurant"
	},

	picture: {
		type: String,
		default: default_restaurants_profile,
	},

	location: {
	    type: {
	    	type: String, // Don't do `{ location: { type: String } }`
	    	enum: ['Point'], // 'location.type' must be 'Point'
	    	required: true
	    },
	    coordinates: {
	    	type: [Number],
	    	required: true
	    }
	},

	menus: [{
		type: Schema.Types.ObjectId,
		ref: 'Menu'
	}],

	// an ID reference to the rating of the 'Comments' to show the overall rating of the restaurant to the end user.
	rating_5stars: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	rating_4stars: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	rating_3stars: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	rating_2stars: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	rating_1stars: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],

}, {
	timestamps: true

});


restaurantSchema.methods.calcRating = calcRating;


module.exports = model('Restaurant', restaurantSchema);
