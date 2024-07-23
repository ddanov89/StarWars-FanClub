const { Schema, model, Types } = require('mongoose');

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["Movie", "Series", "Game"],
        required: true,
    },
    likedBy: {
        type: [Types.ObjectId],
        required: true,
        default: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

module.exports = { Movie };