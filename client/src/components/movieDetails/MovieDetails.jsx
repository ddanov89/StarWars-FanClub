import { Link, useParams } from "react-router-dom";
import { useGetOneMovie } from "../../hooks/useMovies";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetIsLiked } from "../../hooks/useLike";

export default function MovieDetails() {
  const { id } = useParams();

  const [movie] = useGetOneMovie(id);
  const { _id } = useAuthContext();
  const [isLiked] = useGetIsLiked(id, _id);

  const userId = _id;
  const authorId = movie.author;
  const isOwner = _id == authorId;  
 
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

            <div className="product-btn">
              {userId && isOwner ? (
                <div className="author">
                  <Link to={`/edit/${id}`} className="btn-edit">
                    Edit
                  </Link>
                  <Link to={`/delete/${id}`} className="btn-delete">
                    Delete
                  </Link>
                </div>
              ) : userId && isLiked ? (
                <p className="like-message">
                  You have already liked this movie!
                </p>
              ) : userId ? (
                <Link
                  to={`/like/${id}`}
                  className="btn-like">
                  Like
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
