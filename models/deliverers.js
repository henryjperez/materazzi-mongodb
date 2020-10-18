const { Schema, model } = require('mongoose');

const delivererSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	vehicle: String,
	
	deliveries: [{
		type: Schema.Types.ObjectId,
		ref: 'Order' 
	}],


	// storing the comments/rating of the delivery person
	// by storing it all in different groups it'll be easier to calculate the overall rating
	// but should they have this rating? and if they have, should they use the "Comment" model?;
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
	}]

}, {
	timestamps: true
});

module.exports = model('Deliverer', delivererSchema);