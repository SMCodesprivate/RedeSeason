const Post = require('../models/Post');

module.exports = {
	async index(req, res) {
		const { id } = req.params;
		const post = await Post.findById(id);

		if(!post) return res.status(500).send();

		return post;
	}
}