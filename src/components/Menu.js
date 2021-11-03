import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/main-logo.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Menu() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="menu">
      <div className="links">
        <Link className="menu-link" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        {!isAuthenticated && (
          <Link className="menu-link" onClick={() => loginWithRedirect()}>
            Log In
          </Link>
        )}

        {!isAuthenticated && (
          <Link
            className="menu-link"
            onClick={() => loginWithRedirect({ screen_hint: "signup" })}
          >
            Sign Up
          </Link>
        )}

        {isAuthenticated ? (
          <Link className="menu-link" to="/profile">
            Profile
          </Link>
        ) : null}

        {isAuthenticated ? (
          <Link className="menu-link" to="/astronauts">
            Astronauts
          </Link>
        ) : null}

        {isAuthenticated ? (
          <Link className="menu-link" to="/isslocation">
            ISS Location
          </Link>
        ) : null}

        {isAuthenticated && (
          <Link onClick={() => logout()} className="menu-link">
            Log Out
          </Link>
        )}
      </div>
    </div>
  );
}
