import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

import styles from "./register.module.css";

const initialValues = { username: "", email: "", password: "", repass: "" };

export default function Register() {
  const formRef = useRef();
  const register = useRegister();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repassError, setRepassError] = useState("");

  const registerHandler = async (values) => {
    if (values.password != values.repass) {
      throw new Error("Password mismatch!");
    }

    try {
      await register(values.username, values.email, values.password);
      navigate("/");
    } catch (error) {
      console.alert(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  const emailValidator = () => {
    if (!values.email) {
      setEmailError("Email should not be an empty field!");
    } else if (values.email <= 10) {
      setEmailError("Email should be at least 10 characters long!");
    } else {
      setEmailError("");
    }
  };

  const passwordValidator = () => {
    if (!values.password) {
      setPasswordError("Password should not be an empty field!");
    } else if (values.password <= 4) {
      setPasswordError("Password must be at least 4 characters long!");
    } else {
      setPasswordError("");
    }
  };

  const usernameValidator = () => {
    if (!values.username) {
      setUsernameError("Username should not be an empty field!");
    } else if (values.username <= 4) {
      setUsernameError("Username must be at least 4 characters long!");
    } else {
      setUsernameError("");
    }
  };

  const repassValidator = () => {
    if (!values.repass) {
      setRepassError("Confirm Password should not be an empty field!"); 
    } else if (values.password != values.repass) {
      setRepassError("Passwords must match!");
    } else {
      setRepassError("");
    }
  };

  return (
    <>
      <main id="register">
        <div className="register-box">
          <h1>Register</h1>
          <form ref={formRef} onSubmit={submitHandler}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username.."
              value={values.username}
              onChange={changeHandler}
              onBlur={usernameValidator}
              className={usernameError && styles.inputError}
            />
            {usernameError && (
              <div className={styles.errorMessage}>{usernameError}</div>
            )}
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email.."
              value={values.email}
              onChange={changeHandler}
              onBlur={emailValidator}
              className={emailError && styles.inputError}
            />
            {emailError && (
              <div className={styles.errorMessage}>{emailError}</div>
            )}
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password.."
              value={values.password}
              onChange={changeHandler}
              onBlur={passwordValidator}
              className={passwordError && styles.inputError}
            />
            {passwordError && (
              <div className={styles.errorMessage}>{passwordError}</div>
            )}
            <label>Confirm Password</label>
            <input
              type="password"
              name="repass"
              value={values.repass}
              onChange={changeHandler}
              placeholder="Confirm Password.."
              onBlur={repassValidator}
              className={repassError && styles.inputError}
            />
            {repassError && (
              <div className={styles.errorMessage}>{repassError}</div>
            )}
            <input type="submit" value="Register" />
          </form>
          <p>
            Already have an account? <a href="/login">Login here!</a>
          </p>
        </div>
      </main>
    </>
  );
}
