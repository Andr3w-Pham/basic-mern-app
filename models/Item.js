const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// create collection and add schema
module.exports = Item = mongoose.model('item', ItemSchema);
// mongoose.model('item', ItemSchema);