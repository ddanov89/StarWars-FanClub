export default function Login() {
 return (
 <>
 <main id="login">
    <div className="login-box">
        <h1>Login</h1>
        <form method="post">
            <label>Email</label><input type="text" name="email" placeholder="Email.." value="email"/>
            <label>Password</label><input type="password" name="password" placeholder="Password.."/>
            <input type="submit" value="Login"/>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
</main>
 </>
 );
}