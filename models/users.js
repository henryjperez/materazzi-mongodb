const { Schema, model } = require('mongoose');
const { default_users_profile } = require('../config');

const userSchema = new Schema({
	email: {
		trim: true,
		type: String,
		require: true,
		unique: true
	},
	username: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	public_id: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	password: {
		type: String
	},

	given_name: {
		type: String,
		default: "New User",
	},
	
	family_name: String,

	picture: {
		type: String,
		default: default_users_profile,
	},

	address: {
		type: String
	},
	location: { // 1)longitude (2)latitude.
	    type: {
	    	type: String, // Don't do `{ location: { type: String } }`
	    	enum: ['Point'] // 'location.type' must be 'Point'
	    },
	    coordinates: {
	    	type: [Number]
	    }
	},
	channels: [{
		type: Schema.Types.ObjectId,
		ref: 'Channel'
	}],
	account_type: { // this is to identify the what type of user is on the login
		type: String, // the valid inputs (so far) are:
		default: "normal" // "normal", "deliverer" and "restaurant";
	}
}, {
	timestamps: true

});

//userSchema.methods.someThing

module.exports = model('User', userSchema);

// add a way to keep track of the "likes" and rating that the USER made, just to show it in case that the User check for the profile of that restaurant again or something
// it could be something like an Schema.ObjectId to the restaurants or so;

/*orders: [{
		type: Schema.Types.ObjectId,
		ref: 'Order' 
	}],*/
