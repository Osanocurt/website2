const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true },
  posterImage: { type: String }
});

module.exports = mongoose.model('Blog', blogsSchema);
