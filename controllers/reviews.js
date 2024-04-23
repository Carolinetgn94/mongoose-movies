const Movie = require("../models/movie");

async function addReview(req, res) {
  const { id } = req.params;

  const movie = await Movie.findById(id);
  movie.reviews.push(req.body);
  const updatedMovie = await movie.save();

  res.status(200).json(updatedMovie);
}

async function updateYear(req, res) {
    const { id, year } = req.params;
   // const movie = await Movie.findByIdAndUpdate(id, {
  //   releaseYear: year,
  // });

  const movie = await Movie.findById(id);
  movie.releaseYear = year;
  const updatedMovie = await movie.save();

  res.status(201).json(updatedMovie);
}

module.exports = {
  addReview,
  updateYear,
};
