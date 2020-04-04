const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const routes = require('./routes');

const app = express();

let requests = 0;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	console.time(`Request ${requests}`);
	console.timeEnd(`Request ${requests}`);

	return next();
})
app.use(routes);
app.use(errors());

app.listen(3333, () => {
  console.log('Servidor express rodado na porta 3333');
});