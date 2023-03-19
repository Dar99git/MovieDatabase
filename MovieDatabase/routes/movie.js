const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).send(movie);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().populate('main_actor genres country');
    res.status(200).send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('main_actor genres country');
    if (!movie) {
      return res.status(404).send();
    }
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).send();
    }
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).send();
    }
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
