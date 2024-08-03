const { Router } = require('express');
const { getAllMovies, getMovieById, searchMovies } = require('../services/movie');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const movies = await getAllMovies();
    res.json(movies);
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    
    const movie = await getMovieById(req.params.id);

    if (!movie) {
        res.status(404).json({ code: 404, message: 'Item not found!' });
        return;
    }

    res.json(movie);
});

catalogRouter.get('/search', async (req, res) => {
console.log("We are in the search method");
    const { name, category } = req.query;

    const movies = await searchMovies(name, category);

    res.json({ data: { name, category }, movies });
});

module.exports = { catalogRouter };