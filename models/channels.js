const { Schema, model } = require('mongoose');
const { default_users_profile } = require('../config');

const channelSchema = new Schema({
	name: {
		trim: true,
		type: String,
		default: "New Channel",
	},
	picture: {
		type: String,
		default: default_users_profile,
	},
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'User',
		require: true
	}],
	messages: [{
		type: Schema.Types.ObjectId,
		ref: 'Message'
	}],
	
}, {
	timestamps: true
});


module.exports = model('Channel', channelSchema);