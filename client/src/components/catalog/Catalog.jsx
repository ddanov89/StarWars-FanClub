import { useGetAllMovies } from "../../hooks/useMovies";
import MovieItem from "./movieItem/MovieItem";

export default function Catalog() {
  const [movies] = useGetAllMovies();

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
