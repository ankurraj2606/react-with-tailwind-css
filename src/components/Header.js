import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header flex justify-between py-4">
      <Link className="nav-links" to="/">
        <Title />
      </Link>
      <div className="nav-container flex">
        <div className="nav-items">
          <ul className="list flex">
            <Link
              className="nav-links py-2 px-3 border-b-2  border-b-transparent hover:border-b-2 hover:border-orange-400 hover:text-orange-400"
              to="/"
            >
              <li className="text-xl">Home</li>
            </Link>
            <Link
              className="nav-links py-2 px-3 border-b-2  border-b-transparent hover:border-b-2 hover:border-orange-400 hover:text-orange-400"
              to="/about"
            >
              <li className="text-xl">About Us</li>
            </Link>
            <Link
              className="nav-links py-2 px-3 border-b-2  border-b-transparent hover:border-b-2 hover:border-orange-400 hover:text-orange-400"
              to="/contact"
            >
              <li className="text-xl">Contact Us</li>
            </Link>
            <Link
              className="nav-links py-2 px-3 border-b-2  border-b-transparent hover:border-b-2 hover:border-orange-400 hover:text-orange-400"
              to=""
            >
              <li className="text-xl">Cart</li>
            </Link>
            <Link
              className="nav-links py-2 px-3 border-b-2  border-b-transparent hover:border-b-2 hover:border-orange-400 hover:text-orange-400"
              to="/about/profile"
            >
              <li className="text-xl">Profile</li>
            </Link>
            <Link
              className="nav-links py-2 px-3 border-b-2  border-b-transparent hover:border-b-2 hover:border-orange-400 hover:text-orange-400"
              to="/instamart"
            >
              <li className="text-xl">Instamart</li>
            </Link>
            <li>
              <h1>Hi Ankur</h1>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <h1 className="pr-2">{isOnline ? "✔" : "🔴"}</h1>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="border border-orange text-white bg-orange-600 hover:bg-white hover:border-1  hover:border-orange-600 hover:text-orange-600"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="border border-orange text-white bg-orange-600 hover:bg-white hover:border-1  hover:border-orange-600 hover:text-orange-600"
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
