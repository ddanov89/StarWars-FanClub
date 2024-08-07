import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import moviesAPI from "../../api/movies-api";

import styles from "./edit.module.css";

export default function MovieEdit() {
  const formRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [nameError, setNameError] = useState("");
  const [imageError, setImageError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

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
      console.alert(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    movie,
    editMovieSubmitHandler
  );

  const nameValidator = () => {
    if (!values.name) {
      setNameError("Name should not be an empty field!");
    } else if (values.name.length <= 4) {
      setNameError("Name should be at least 4 characters long!");
    } else {
      setNameError("");
    }
  };

  const imageValidator = () => {
    if (!values.image) {
      setImageError("Image should start with an http:// or https://!");
    } else {
      setImageError("");
    }
  };

  const reviewValidator = () => {
    if (!values.review) {
      setReviewError("Review should not be an empty field!");
    } else if (values.review.length <= 10) {
      setReviewError("Review should be at least 10 characters long!");
    } else {
      setReviewError("");
    }
  };
  const ratingValidator = () => {
    if (!values.rating) {
      setRatingError("Rating should not be an empty field!");
    } else if (values.rating < 1 || values.rating > 5) {
      setRatingError("Rating should be a number between 1 and 5!");
    } else {
      setRatingError("");
    }
  };

  const descriptionValidator = () => {
    if (!values.description) {
      setDescriptionError("Description should not be an empty field!");
    } else if (values.description.length <= 10) {
      setDescriptionError("Description must be at least 10 characters long!");
    } else {
      setDescriptionError("");
    }
  };

  return (
    <>
      <main id="edit">
        <section id="edit-container">
          <div className="edit-container-info">
            <h1>Edit Movie</h1>
            <form ref={formRef} name="edit-form" onSubmit={submitHandler}>
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
                onBlur={nameValidator}
                className={nameError && styles.inputError}
              />
              {nameError && (
                <div className={styles.errorMessage}>{nameError}</div>
              )}
              <label>Image:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder=""
                value={values.image}
                onChange={changeHandler}
                onBlur={imageValidator}
                className={imageError && styles.inputError}
              />
              {imageError && (
                <div className={styles.errorMessage}>{imageError}</div>
              )}
              <label>Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={values.rating}
                onChange={changeHandler}
                onBlur={ratingValidator}
                pattern="[1-5]*"
                inputMode="numeric"
                className={ratingError && styles.inputError}
              />
              {ratingError && (
                <div className={styles.errorMessage}>{ratingError}</div>
              )}
              <label>Review:</label>
              <textarea
                id="review"
                name="review"
                value={values.review}
                onChange={changeHandler}
                onBlur={reviewValidator}
                className={reviewError && styles.inputError}
              ></textarea>
              {reviewError && (
                <div className={styles.errorMessage}>{reviewError}</div>
              )}
              <label>Description:</label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                onChange={changeHandler}
                onBlur={descriptionValidator}
                className={descriptionError && styles.inputError}
              ></textarea>
              {descriptionError && (
                <div className={styles.errorMessage}>{descriptionError}</div>
              )}
              <input type="submit" id="btn" value="Edit"></input>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
