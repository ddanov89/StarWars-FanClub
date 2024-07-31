import { useEffect, useState } from "react";
import moviesAPI from "../api/movies-api";
import { useAuthContext } from "../contexts/AuthContext";

export default function useProfile() {
    const [movies, setMovies] = useState([]);
    const { _id } = useAuthContext();
    const userId = _id;

    useEffect(() => {
        (async () => {
            const profile = await moviesAPI.getByUserId(userId);
            const movies = await profile.movies;
            setMovies(movies);
            
        })();
    }, [userId]);
    return [movies, setMovies];
}