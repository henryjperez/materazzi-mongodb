const { Schema, model } = require('mongoose');
const { default_users_profile } = require('../config');

const userSchema = new Schema({
	given_name: {
		trim: true,
		type: String,
		default: "New User",
	},
	family_name: {
		trim: true,
		type: String,
	},
	email: {
		trim: true,
		type: String,
		require: true,
		unique: true
	},
	picture: {
		type: String,
		default: default_users_profile,
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
	account_type: { // this is to identify the what type of user is on the login
		type: String, // the valid inputs (so far) are:
		default: "normal" // "normal", "deliverer" and "restaurant";
	},

	// materazzi-messenger
	channels: [{
		type: Schema.Types.ObjectId,
		ref: 'Channel'
	}],
	chats: [{
		type: Schema.Types.ObjectId,
		ref: 'Chat'
	}],
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
