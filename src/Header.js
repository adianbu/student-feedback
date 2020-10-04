import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Header.css";

function Header({ user }) {
  const history = useHistory();
  const handleLogout = () => {
    if (user) {
      auth.signOut();
      // history.push("/login");
    }
    console.log("User logged out");
  };
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <h1>Student Feedback</h1>
      </Link>

      <button onClick={handleLogout} className="header__button">
        <Link className="header__link" to="/login">
          Log Out
        </Link>
      </button>
    </div>
  );
}

export default Header;
