require('dotenv').config();
const express = require('express');
const api = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('Connected to database'));

api.use(express.json());
api.use(cors());

const router = require('./characters');
api.use('/characters', router);

api.listen(3000, () => console.log("server started !"));