import { useNavigate, useParams } from "react-router-dom";
import moviesAPI from "../../api/movies-api";

export default function MovieCreate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const createSubmitHandler = async (e) => {
    e.preventDefault();
    const movieData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await moviesAPI.create(movieData);
      navigate(`/catalog/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main id="create">
        <section id="create-container">
          <div className="create-container-info">
            <h1>Add to the Universe</h1>
            <form name="create-form" onSubmit={createSubmitHandler}>
              <label>Category:</label>
              <select
                autoComplete="off"
                id="category"
                name="category"
                selected=""
              >
                <option value="" hidden="hidden" selected>
                  ""
                </option>
                <option value="---" hidden="hidden" selected>
                  ---
                </option>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
                <option value="Game">Game</option>
              </select>
              <label>Name:</label>
              <input type="text" id="name" name="name" />
              <label>Image:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="http://..."
              />
              <label>Rating:</label>
              <input type="number" id="rating" name="rating" />
              <label>Review:</label>
              <textarea id="review" name="review"></textarea>
              <label>Description:</label>
              <textarea id="description" name="description"></textarea>
              <input type="submit" id="btn" value="Add"></input>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
