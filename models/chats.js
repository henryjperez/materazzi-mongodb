const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
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


module.exports = model('Chat', chatSchema);
