import { Link } from "react-router-dom";

export default function MovieItem({ 
  image, 
  name, 
  category, 
  rating, 
  _id
}) {
  return (
    <>
      <div className="movie">
        <div className="movie-img">
          <img src={image} />
        </div>
        <div className="movie-info">
          <h1>{name}</h1>
          <p>
            <span>Category: </span>{category}
          </p>
          <p>
            <span>Rating: </span>{rating}
          </p>
        </div>
        <Link to={`/catalog/${_id}`} className="btn-details">
          Details
        </Link>
      </div>
    </>
  );
}
