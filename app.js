const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const postsRoute = require('./routes/posts');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('We are home');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB'));

// Listen to server
app.listen(3000);
