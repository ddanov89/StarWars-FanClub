import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import moviesAPI from "../api/movies-api";
import { useAuthContext } from "../contexts/AuthContext";

export function useGetIsLiked(movieId, userId) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        (async () => {
            const movie = await moviesAPI.getOne(movieId);
            const movieLikes = await movie.likedBy;
            const result = movieLikes.find(like => like.toString() == userId);
            setIsLiked(!!result);
        })();
    }, []);
    return [isLiked, setIsLiked];
}

export function usePostLike() {
    const { id } = useParams();
    const { _id } = useAuthContext();
    const userId = _id;

  const [like, setLike] = useState({});

  useEffect(() => {
      (async () => {
        const userData = {
            userId: userId
        };
        const result = await moviesAPI.like(id, userData);
          setLike(result);
      })();
  }, []);
  return [like, setLike];
}
