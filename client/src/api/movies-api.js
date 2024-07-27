import * as request from './requester';

const BASE_URL = 'http://localhost:3000/';

const getAll = async () => {
    const result = await request.get(`${BASE_URL}catalog`);
    const movies = Object.values(result);
    return movies;
};

const getOne = (movieId) => request.get(`${BASE_URL}catalog/${movieId}`);

const create = (movieData) => request.post(`${BASE_URL}create`, movieData);

const moviesAPI = {
    getAll,
    getOne,
    create
};

export default moviesAPI;