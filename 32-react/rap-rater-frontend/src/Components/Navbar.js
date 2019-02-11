import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <ul>
      <Link to="/home">
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
            props.logout();
          }}
        >
          Log Out
        </li>
      ) : null}
    </ul>
  );
};

export default withRouter(Navbar);
