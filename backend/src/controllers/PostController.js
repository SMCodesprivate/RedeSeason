const Post = require('../models/Post');

module.exports = {
	async store(req, res) {
		const { content } = req.body;

		await Post.create({
			title: "Iniciando na programação",
			content
		});

		return res.status(201).send();
	},

	async index(req, res) {
		const posts = await Post.find();

		return res.json(posts);
	}
}