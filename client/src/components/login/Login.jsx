import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

import styles from './login.module.css';

const initialValues = { email: "", password: "" };

export default function Login() {
  const formRef = useRef();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState('');

  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.alert(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );
  
  const emailValidator =() => {
    if (!values.email) {
      setEmailError("Email should not be an empty field!");
    } else if (values.email <= 10) {
      setEmailError("Email should be at least 10 characters long!");
    } else {
      setEmailError('');
    }

  };
  
  const passwordValidator = () => {
    if (!values.password) {
      setPasswordError("Password should not be an empty field!");
    } else if (values.password <= 4) {
      setPasswordError('Password must be at least 4 characters long!');
    } else {
      setPasswordError('');
    }
  };

  return (
    <>
      <main id="login">
        <div className="login-box">
          <h1>Login</h1>
          <form ref={formRef} onSubmit={submitHandler}>
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
              <span className={styles.errorMessage}>{passwordError}</span>
              
            )}
            <input type="submit" value="Login" />
          </form>
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </main>
    </>
  );
}
