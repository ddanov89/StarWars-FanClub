const { Router } = require('express');
const { getAllMovies, getMovieById, searchMovies } = require('../services/movie');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const movies = await getAllMovies();
    res.json(movies);
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    const movieId = req.params.id;
    const movie = await getMovieById(movieId);

    if (!movie) {
        res.status(404).json({ code: 404, message: 'Item not found!' });
        return;
    }

    movie.likes = movie.likedBy.length;

    movie.hasUser = res.locals.hasUser;
    movie.isAuthor = req.user._id == movie.author.toString();
    movie.hasBeenLiked = Boolean(movie.likedBy.find(b => b.toString() == req.user._id));
    res.json(movie);
});

catalogRouter.get('/search', async (req, res) => {

    const { name, category } = req.query;

    const movies = await searchMovies(name, category);

    res.json({ data: { name, category }, movies });
});

module.exports = { catalogRouter };