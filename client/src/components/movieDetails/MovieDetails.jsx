import { Link } from "react-router-dom"

export default function MovieDetails() {
 return (
 <>
 <main id="details">

    <section id="details-info">
        <div className="movie-image">
            <img src={image}/>
        </div>
        <div className="movie-info">
            <div className="movie-text">
                <h1 id="name">{}</h1>
                <h3 id="category">Category: {category}</h3>
                <p id="rating"><span>Rating: {rating}</span></p>
                <p id="review">Review: <br/>{review}</p>
                <p id="description">Description: <br/>{description}</p>
            </div>

            {/* if user */}

            <div className="product-btn">

                {/* if author */}
                <div className="author">
                    <Link to={`/edit/${id}`} className="btn-edit">Edit</Link>
                    <Link to={`/delete/${id}`} className="btn-delete">Delete</Link>
                </div>
                
                {/* if hasBeenLiked */}
                <p className="like-message">You have already liked this movie!</p>
                <Link to={`/like/${id}`} className="btn-like">Like</Link>
                
            </div>
            
        </div>
        
    </section>
</main>
 </>
 );
}