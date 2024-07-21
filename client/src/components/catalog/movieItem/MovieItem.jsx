import { Link } from "react-router-dom";

export default function MovieItem() {
  return (
    <>
      <div class="movie">
        <div class="movie-img">
          <img src="image" />
        </div>
        <div class="movie-info">
          <h1>"name"</h1>
          <p>
            <span>Category: </span>"category"
          </p>
          <p>
            <span>Rating: </span>"rating"
          </p>
        </div>
        <Link to={`/catalog/${_id}`} class="btn-details">
          Details
        </Link>
      </div>
    </>
  );
}
