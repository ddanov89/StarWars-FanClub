export default function Register() {
  return (
    <>
      <main id="register">
        <div className="register-box">
          <h1>Register</h1>
          <h4>It's free and only takes a minute</h4>
          <form method="post">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username.."
              value=""
            />
            <label>Email</label>
            <input type="text" name="email" placeholder="Email.." value="" />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password.."
              value=""
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="repass"
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
