const { Movie } = require('../models/Movie');

async function getAllMovies() {

    return Movie.find().lean();
}

async function getMovieById(id) {

    return Movie.findById(id).lean();
}

async function createMovie(data, authorId) {
    const record = new Movie({
        name: data.name,
        image: data.image,
        rating: data.rating,
        description: data.description,
        review: data.review,
        category: data.category,
        author: authorId
    });

    await record.save();
    return record;
}

async function updateMovie(movieId, data, userId) {

    const record = await Movie.findById(movieId);

    if (!record) {
        throw new Error('Record not found' + movieId);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied!');
    }

        record.name = data.name,
        record.image = data.image,
        record.rating = data.rating,
        record.description = data.description,
        record.review = data.review,
        record.category = data.category

    await record.save();

    return record;

}

async function deleteMovieById(movieId, userId) {

    const record = await Movie.findById(movieId);

    if (!record) {
        throw new Error('Record not found' + movieId);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied!');
    }

    await Movie.findByIdAndDelete(movieId);
}

async function searchMovies(name, category) {

    const query = {};

    if (name) {
        query.name = new RegExp(name, 'i');
    }
    if (category && category != '---') {
        query.category = category;
    }
    return Movie.find(query).lean();
}

async function likeMovie(movieId, userId) {
    const record = await Movie.findById(movieId);

    if (!record) {
        throw new Error('Record not found' + movieId);
    }
    if (record.author.toString() == userId) {
        throw new Error('Cannot like your own movie/game!');
    }
    const likedBy = record.likedBy;
    if (likedBy.find(like => like.toString() == userId)) {
        throw new Error('You can only like this movie/game once!');
    }

    record.likedBy.push(userId);

    await record.save();
    return record;
}

async function getAllMyAdditions(userId) {
    return await Movie.find({ author: userId}).lean();
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovieById,
    searchMovies,
    likeMovie,
    getAllMyAdditions
};