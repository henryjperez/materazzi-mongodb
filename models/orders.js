const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
	order: {
		type: String,
		require: true
	},
	price: {
		type: String,
		require: true
	},
	buyer: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	deliverer: {
		type: Schema.Types.ObjectId,
		ref: 'Deliverer'
	},
	restaurant: {
		type: Schema.Types.ObjectId,
		ref: 'Restaurant'
	},
	transaction_id: {
		type: String
	}
}, {
	timestamps: true
});

module.exports = model('Order', orderSchema);