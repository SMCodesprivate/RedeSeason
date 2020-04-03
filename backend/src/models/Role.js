const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	permissionLevel: {
		type: Number,
		required: true
	},
	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Role', RoleSchema);