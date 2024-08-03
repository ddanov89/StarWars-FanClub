import * as request from './requester';

const BASE_URL = 'http://localhost:3000/';

const getAll = async () => {
    const result = await request.get(`${BASE_URL}catalog`);
    const movies = Object.values(result);
    return movies;
};

const getOne = async (movieId) =>await request.get(`${BASE_URL}catalog/${movieId}`);

const create = (movieData) => request.post(`${BASE_URL}create`, movieData);

const edit = (movieId, movieData) => request.put(`${BASE_URL}edit/${movieId}`, movieData);

const like = async (movieId, userIdData) => {
    const result = await request.post(`${BASE_URL}like/${movieId}`, userIdData);
    return result;
};

const getByUserId = async () => await request.get(`${BASE_URL}profile`);

const deleteItem = async (movieId) => await request.del(`${BASE_URL}delete/${movieId}`);

const search = async (searchQuery) => {
    const result =  await request.get(`${BASE_URL}search?${searchQuery}`);
    return result;
}

const moviesAPI = {
    getAll,
    getOne,
    create,
    edit,
    like,
    getByUserId,
    search,
    deleteItem
};

export default moviesAPI;