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

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => {
  console.log('Servidor express rodado na porta 3333');
});