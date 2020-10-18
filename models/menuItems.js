const { Schema, model } = require('mongoose');

const { default_menus_item_img } = require('../config/global_variables.js');

const menuItemSchema = new Schema({
	name: String,
	
	description: {
		type: String,
		default: 'A dish'
	},
	
	picture: {
		type: String,
		default: default_menus_item_img,
	},

	price: Number,

	restaurant: {
		type: Schema.Types.ObjectId,
		ref: 'Restaurant'
	},

	menus: [{
		type: Schema.Types.ObjectId,
		ref: 'Menu'
	}],

	tags: [{
		type: Schema.Types.ObjectId,
		ref: 'Tag'
	}],

}, {
	timestamps: true
});


module.exports = model('Menu Item', menuItemSchema);