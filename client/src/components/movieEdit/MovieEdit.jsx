import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import moviesAPI from "../../api/movies-api";
import { useEffect, useState } from "react";

const initialValues = {
  category: "",
  name: "",
  image: "",
  rating: "",
  review: "",
  description: "",
};

export default function MovieEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [movie, setMovie] = useState({
    category: "",
    name: "",
    image: "",
    rating: "",
    review: "",
    description: "",
  });

  useEffect(() => {
    moviesAPI.getOne(id).then((result) => {
      setMovie(result);
    });
  }, [id]);

  const editMovieSubmitHandler = async (values) => {
    try {
      await moviesAPI.edit(id, values);
      navigate("/catalog");
    } catch (error) {
      console.log(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    movie,
    editMovieSubmitHandler
  );
  return (
    <>
      <main id="edit">
        <section id="edit-container">
          <div className="edit-container-info">
            <h1>Edit Movie</h1>
            <form name="edit-form" onSubmit={submitHandler}>
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
                placeholder=""
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
              <input type="submit" id="btn" value="Edit"></input>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
