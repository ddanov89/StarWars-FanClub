import { useState } from "react";

import useForm from "../../hooks/useForm";
import moviesAPI from "../../api/movies-api";
import MovieItem from "../catalog/movieItem/MovieItem";

const initialValues = {
  name: "",
  category: "",
};
  
  export default function MovieSearch() {

    const [movies, setMovies] = useState('');
  
    const searchHandler = async (values) => {
      try {
            const searchQuery = `name=${values.name}&category=${values.category}`
            const result =await  moviesAPI.search(searchQuery);
            const movieData = await result.movies;
            setMovies(movieData);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const { values, changeHandler, submitHandler } = useForm(
      initialValues,
      searchHandler
    );

  return (
    <>
      <main id="search">
        <section className="movie-search">
          <h1>Search the Universe</h1>

          <form
            className="search-form"
            name="search-form"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              className="search-movie"
              name="name"
              placeholder="Search here..."
              value={values.name}
              onChange={changeHandler}
            />
            <select
              name="category"
              id="category"
              value={values.category}
              onChange={changeHandler}
            >
              <option value="---" hidden="hidden">
                ---
              </option>
              <option value="Movie">Movie</option>
              <option value="Series">Series</option>
              <option value="Game">Game</option>
            </select>
            <button type="submit" className="btn-search">
              Search
            </button>
          </form>

             <div className="search-list">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieItem key={movie._id} {...movie} />)
            ) : (
              <div className="no-movie">
                <p>There are no movie/games yet!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
