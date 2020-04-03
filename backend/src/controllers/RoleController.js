const Role = require('../models/Role');

module.exports = {
	async index(req, res) {
		const users = await Role.find();

		return res.status(200).json(users);
	},
	async store(req, res) {
		const { name, color, permissionLevel } = req.body;

		await Role.create({
			name,
			color,
			permissionLevel,
			users: [],
		}).then(role => {
			console.log('Sucess');
			console.log(role);
			return res.status(201).json(role);
		}).catch(err => {
			console.log('Rejected');
			console.log(err);
			return res.status(500).send();
		});

		return res.send();
	}
}