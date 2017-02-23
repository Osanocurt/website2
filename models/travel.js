const mongoose = require('mongoose');

const travelssSchema = new mongoose.Schema({
  text: { type: String, required: true, trim: true },
  title:{ type: String, required: true, trim: true},
  posterImage: { type: String }
});

module.exports = mongoose.model('Travel', travelssSchema);
