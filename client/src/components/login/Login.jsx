import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };

export default function Login() {
  
  const login = useLogin();

  const navigate = useNavigate();


  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <>
      <main id="login">
        <div className="login-box">
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
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
