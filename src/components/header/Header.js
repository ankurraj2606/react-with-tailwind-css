import { useState } from "react";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Link className="nav-links" to="/">
        <Title />
      </Link>
      <div className="nav-container">
        <div className="nav-items">
          <ul className="list">
            <Link className="nav-links" to="/">
              <li className="list-items">Home</li>
            </Link>
            <Link className="nav-links" to="/about">
              <li className="list-items">About Us</li>
            </Link>
            <Link className="nav-links" to="/contact">
              <li className="list-items">Contact Us</li>
            </Link>
            <Link className="nav-links" to="">
              <li className="list-items">Cart</li>
            </Link>
            <Link className="nav-links" to="/about/profile">
              <li className="list-items">Profile</li>
            </Link>
            <Link className="nav-links" to="/instamart">
              <li className="list-items">Instamart</li>
            </Link>
          </ul>
        </div>
        <h1>{isOnline ? "✔" : "🔴"}</h1>
        <div className="login-logout-container">
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="btn login-logout"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="btn login-logout"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
