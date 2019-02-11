import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/rappers">
        <li>Rappers</li>
      </Link>
      <Link to="/login">
        <li>Log In</li>
      </Link>
      <Link to="/signup">
        <li>Sign Up</li>
      </Link>
      {props.user ? (
        <li
          onClick={() => {
            localStorage.removeItem("token");
            props.history.push("/login");
          }}
        >
          Log Out
        </li>
      ) : null}
    </ul>
  );
};

export default withRouter(Navbar);
