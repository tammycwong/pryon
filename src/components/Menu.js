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
          <Link
            className="menu-link"
            onClick={() => loginWithRedirect()}
            to="#"
          >
            Log In
          </Link>
        )}

        {!isAuthenticated && (
          <Link
            className="menu-link"
            onClick={() => loginWithRedirect({ screen_hint: "signup" })}
            to="#"
          >
            Sign Up
          </Link>
        )}

        {/* if not authenticated, render link */}

        {isAuthenticated && (
          <Link className="menu-link" to="/profile">
            Profile
          </Link>
        ) }


        {isAuthenticated && (
          <Link className="menu-link" to="/astronauts">
            Astronauts
          </Link>
        ) }

        {isAuthenticated && (
          <Link className="menu-link" to="/isslocation">
            ISS Location
          </Link>
        )}

        {isAuthenticated && (
          <Link onClick={() => logout()} className="menu-link" to="#">
            Log Out
          </Link>
        )}

        {/* if authenticated, render those links that's what the && means*/}
      </div>
    </div>
  );
}
