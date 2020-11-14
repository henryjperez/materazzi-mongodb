const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	content: {
		type: String,
		require: true,
	},
	picture: {
		trim: true,
		type: String,
	},
	public_id: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	alive: {
		type: Boolean,
		require: true,
		default: true,
	},
	recipient: {
		type: Schema.Types.ObjectId,
		refPath: 'holder',
		require: true,
	},
	holder: {
		type: String,
		require: true,
		enum: ['Chat', 'Channel'],
	},

}, {
	timestamps: true

});

module.exports = model('Message', messageSchema);
