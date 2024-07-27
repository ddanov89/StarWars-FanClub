import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useCreateMovie } from "../../hooks/useMovies";

const initialValues = {
  category: "",
  name: "",
  image: "",
  rating: "",
  review: "",
  description: "",
};

export default function MovieCreate() {
  const navigate = useNavigate();
  // let createMovie = useCreateMovie();

  const createHandler = async (values) => {
    try {
      const { _id } = await useCreateMovie(values);
      navigate(`/catalog/${_id}`);
    } catch (error) {
      //TODO: Set error state and display error
      console.log(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  return (
    <>
      <main id="create">
        <section id="create-container">
          <div className="create-container-info">
            <h1>Add to the Universe</h1>
            <form name="create-form" onSubmit={submitHandler}>
              <label>Category:</label>
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
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={changeHandler}
              />
              <label>Image:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="http://..."
                value={values.image}
                onChange={changeHandler}
              />
              <label>Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={values.rating}
                onChange={changeHandler}
              />
              <label>Review:</label>
              <textarea
                id="review"
                name="review"
                value={values.review}
                onChange={changeHandler}
              ></textarea>
              <label>Description:</label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                onChange={changeHandler}
              ></textarea>
              <input type="submit" id="btn" value="Create"></input>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
