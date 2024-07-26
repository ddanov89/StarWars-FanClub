const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { createMovie, getMovieById, updateMovie, deleteMovieById, likeMovie, getAllMyAdditions } = require('../services/movie');
const { parseError } = require('../util');
const { isUser } = require('../middlewares/guards');

const movieRouter = Router();


movieRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 4 }).withMessage('Name should be at least 4 characters long!'),
    body('image').trim().isURL({require_tld: false, require_protocol: true}).withMessage('Image should be start with http:// or https://!'),
    body('rating').trim().isLength({ min: 1, max: 5 }).withMessage('Rating should be a non-negative number between 1 and 5!'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description should be at least 10 characters long!'),
    body('review').trim().isLength({ min: 10 }).withMessage('Review should be at least 10 characters long!'),
    body('category').trim(),
    async (req, res) => {
        const userId = req.user?._id;
        try {
            const validation = validationResult(req);
            if (validation.errors.length) {
                throw validation.errors;
            }
            const result = await createMovie(req.body, userId);
            res.json(result);
        } catch (error) {
            res.json({ data: req.body, errors: parseError(error).errors });
        }
    });
movieRouter.get('/edit/:id', isUser(), async (req, res) => {
    const movieId = req.params.id;
    const movie = await getMovieById(movieId);
    if (!movie) {
        res.status(404).end();
        return;
    }
    if (movie.author.toString() != req.user._id) {
        res.status(401).end();
    }
    res.json({ data: movie });
});

movieRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 4 }).withMessage('Name should be at least 4 characters long!'),
    body('image').trim().isURL({require_tld: false, require_protocol: true}).withMessage('Image should be start with http:// or https://!'),
    body('rating').trim().isLength({ min: 1, max: 5 }).withMessage('Rating should be a non-negative number between 1 and 5!'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description should be at least 10 characters long!'),
    body('review').trim().isLength({ min: 10 }).withMessage('Review should be at least 10 characters long!'),
    body('category').trim(),
    async (req, res) => {
        const movieId = req.params.id;
        const userId = req.user._id;
        try {
            const validation = validationResult(req);
            if (validation.errors.length) {
                throw validation.errors;
            }
            const result = await updateMovie(movieId, req.body, userId);
            res.json(result);
        } catch (error) {
            res.json({ data: req.body, errors: parseError(error).errors });
        }
    });

movieRouter.delete('/delete/:id',isUser(), async (req, res) => {
    const movieId = req.params.id;
    try {
        await deleteMovieById(movieId, req.user._id);
        res.status(204).end();
    } catch (error) {
        if (error.message == 'Access denied!') {
            res.status(403).json({ code: 403, message: 'Access denied!' });
        } else if (error instanceof ReferenceError) {
            res.status(404).json({ code: 404, message: 'Item not found!' });
        } else {
            res.status(400).json({ code: 400, message: parseError(error).message });
        }
    }
});

movieRouter.get('/like/:id', async (req, res) => {

    const movieId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await likeMovie(movieId, userId);
        res.json(result);
    } catch (error) {
        res.json({ errors: parseError(error).errors });
    }
});

movieRouter.get('/profile', isUser(), async (req, res) => {

    const userId = req.user._id;
    const movies = await getAllMyAdditions(userId);
    console.log(movies);
    const email = req.user.email;
    res.json({ movies, email });
});

module.exports = { movieRouter };