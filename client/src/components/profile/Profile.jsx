import { useAuthContext } from "../../contexts/AuthContext";
import useProfile from "../../hooks/useProfile";
import MovieItem from "../catalog/movieItem/MovieItem";

export default  function Profile() {
  const { _id, email } = useAuthContext();
  const userId = _id;
  const userEmail = email;
  const [movies] = useProfile(userId);

  return (
    <>
    <main className="movie-market">
      <section className="profile-page">
        <div className="profile-card">
          <div className="top-section">
            <i className="message fas fa-envelope"></i>
            <i className="notif fas fa-bell"></i>
            <div className="pic">
              <img src="https://i.ebayimg.com/images/g/yOwAAOSwImRYDWHF/s-l1200.webp" />
            </div>
            <div className="email">{userEmail}</div>
          </div>

          <div className="bottom-section">
            <h2>My Star wars collection</h2>
          </div>
        </div>
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieItem key={movie._id} {...movie} />)
          ) : (
            <h2 className="no-movie">
              <p>You have not added any star wars movies/games to your collection
              yet...</p>
            </h2>
          )}
        </div>
      </section>
      </main>
    </>
  );
}
