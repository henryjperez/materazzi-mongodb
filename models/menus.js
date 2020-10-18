const { Schema, model } = require('mongoose');

const { default_menus_img } = require('../config');

const menuSchema = new Schema({
	name: String,
	
	description: {
		type: String,
		default: 'New Menu',
	},
	
	picture: {
		type: String,
		default: default_menus_img,
	},

	restaurant: {
		type: Schema.Types.ObjectId,
		ref: 'Restaurant'
	},

	items: [{
		type: Schema.Types.ObjectId,
		ref: 'Menu Item',
	}],

	tags: [{
		type: Schema.Types.ObjectId,
		ref: 'Tag'
	}],

}, {
	timestamps: true
});


module.exports = model('Menu', menuSchema);
