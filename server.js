const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Load routes
const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Load Keys
const db = require('./config/keys')

// Connect to Mongo
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true
}) // note connect returns promise
.then(() => console.log('MongoDb connection'))
.catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started port ${port}`));

// Note: We make an API folder inside routes because the API routes are going to return JSON. And to specify it's an api route