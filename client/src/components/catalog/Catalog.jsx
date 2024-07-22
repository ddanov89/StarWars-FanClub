import { useEffect, useState } from "react";
import * as moviesAPI from "../../api/movies-api";
import MovieItem from "./movieItem/MovieItem";

export default function Catalog() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await moviesAPI.getAll();
      setMovies(result);
    })();
  }, []);

  return (
    <>
      <main id="catalog">
        <section className="movie-market">
          <h1>Universe Catalog</h1>

          <div className="movie-list">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieItem key={movie._id} {...movie} />)
            ) : (
              <div className="no-movie">
                <p>There are no movie/games added yet!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
