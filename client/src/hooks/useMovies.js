import { useEffect, useState } from "react";

import moviesAPI from "../api/movies-api";


export function useGetAllMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getAll();
            setMovies(result);
        })();
    }, []);
    return [movies, setMovies];
}

export function useGetOneMovie(movieId) {
    const [movies, setMovies] = useState({});

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getOne(movieId);
            setMovies(result);
        })();
    }, [movieId]);

    return [movies, setMovies];
}

export async function useCreateMovie(movieData) {
    return moviesAPI.create(movieData)
}

export async function useSearch(searchQuery) {
    return await moviesAPI.search(searchQuery)
}

export async function useGetAllMyMovies(userId) {
    const result = await moviesAPI.getByUserId(userId);
    console.log(result);
    return result;
}

export const useDelete = (movieId) => {

    const deleteHandler = async () => {
        await moviesAPI.deleteItem(movieId);
    };
    return deleteHandler;
};
