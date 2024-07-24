import * as request from './requester';

const BASE_URL = 'http://localhost:3000/';

const getAll = async () => {
    const result = await request.get(`${BASE_URL}` + `catalog`);
    const movies = Object.values(result);
    return movies;
};

const getOne = async (movieId) => {
    return await request.get(`${BASE_URL}catalog/${movieId}`);
};

const create = async (movieData) => {
    const response = await fetch(`${BASE_URL}create`, {
        method: 'POST',
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(movieData)
    });

    const result = await response.json();
    return result;
};

const moviesAPI = {
    getAll,
    getOne,
    create
};

export default moviesAPI;