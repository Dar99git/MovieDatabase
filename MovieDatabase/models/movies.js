const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  main_actor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],
  director: { type: String, required: true },
  cast: [{
    name: { type: String, required: true },
    bio: String,
    dob: Date
  }],
  genres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'director'
  }],
  country: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  }],
  plot: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
