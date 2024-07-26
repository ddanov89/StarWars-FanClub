import { Link, useParams } from "react-router-dom";
import { useGetOneMovie } from "../../hooks/useMovies";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie] = useGetOneMovie(id);

  return (
    <>
      <main id="details">
        <section id="details-info">
          <div className="movie-image">
            <img src={movie.image} />
          </div>
          <div className="movie-info">
            <div className="movie-text">
              <h1 id="name">{movie.name}</h1>
              <h3 id="category">Category: {movie.category}</h3>
              <p id="rating">
                <span>Rating: {movie.rating}</span>
              </p>
              <p id="review">
                Review: <br />
                {movie.review}
              </p>
              <p id="description">
                Description: <br />
                {movie.description}
              </p>
            </div>

            {/* if user */}

            <div className="product-btn">
              {/* if author */}
              <div className="author">
                <Link to={`/edit/${movie._id}`} className="btn-edit">
                  Edit
                </Link>
                <Link to={`/delete/${movie._id}`} className="btn-delete">
                  Delete
                </Link>
              </div>

              {/* if hasBeenLiked */}
              <p className="like-message">You have already liked this movie!</p>
              <Link to={`/like/${movie._id}`} className="btn-like">
                Like
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
