import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

const initialValues = { username: "", email: "", password: "", repass: "" };

export default function Register() {
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password != values.repass) {
      throw new Error("Password mismatch!");
    }

    try {
      await register(values.username, values.email, values.password);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );
  return (
    <>
      <main id="register">
        <div className="register-box">
          <h1>Register</h1>
          <h4>It's free and only takes a minute</h4>
          <form onSubmit={submitHandler}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username.."
              value={values.username}
              onChange={changeHandler}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email.."
              value={values.email}
              onChange={changeHandler}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password.."
              value={values.password}
              onChange={changeHandler}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="repass"
              value={values.repass}
              onChange={changeHandler}
              placeholder="Confirm Password.."
            />
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
