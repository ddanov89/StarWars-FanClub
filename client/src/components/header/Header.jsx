import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { isAuthenticated } = useAuthContext();
  return (
    <>
      <header className="header">
        <nav>
          <img src="/static/images/swlogo.png" className="logo" />
          <ul>
            <li>
              <Link to="/">Home Base</Link>
            </li>
            <li>
              <Link to="/catalog">Star Wars Universe Catalog</Link>
            </li>
            <li>
              <Link to="/search">Search the Universe</Link>
            </li>
            {isAuthenticated ? (
              <div className="user">
                <li>
                  <Link to="/create">Add to the Universe</Link>
                </li>
                <li>
                  <Link to="/profile">Your place in the Universe</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </div>
            ) : (
              <div className="guest">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
