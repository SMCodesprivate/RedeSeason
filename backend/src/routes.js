const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const RoleController = require('./controllers/RoleController');
const PostController = require('./controllers/PostController');
const getPostId = require('./controllers/getPostId');

const routes = express.Router();

routes.post('/role', celebrate({
  [Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		color: Joi.string().min(6).max(6).hex().required(),
		permissionLevel: Joi.number().min(0).max(5).required(),
  }),
}), RoleController.store);

routes.post('/post', celebrate({
  [Segments.BODY]: Joi.object().keys({
		content: Joi.string().required()
  }),
}), PostController.store);

routes.get('/post', PostController.index);

routes.get('/post/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.required()
	})
}), getPostId.index);

module.exports = routes;