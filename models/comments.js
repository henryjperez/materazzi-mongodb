const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	content: {
		type: String
	},
	pictures: [{
		type: String,
		default: null
	}],
	rating_stars: {
		type: Number,
		default: null
	},
	receiver: {
		type: Schema.Types.ObjectId,
		ref: 'Restaurant'		
	},
	replies: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]

}, {
	// use the timestamps to determine if a comment was edited or not;
	timestamps: true // just send both dates to the client;

});

module.exports = model('Comment', commentSchema);