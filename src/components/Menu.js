import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
// import Login from "./Login";
import Home from "./Home";
import Astronauts from "./Astronauts";
import IssLocation from "./IssLocation";
import image from "../images/main-logo.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Menu() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="menu">
      <div className="links">
        <Link className="menu-link" to="/">
          <img className="logo" src={image} alt="logo" />
        </Link>
          {!isAuthenticated && (
            <Link className="menu-link" onClick={() => loginWithRedirect()}>
              Log In
            </Link>
          )}

          {!isAuthenticated && (
            <Link className="menu-link" onClick={() => loginWithRedirect({screen_hint:'signup'})}>
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/astronauts">
          <Astronauts />
        </Route>

        <Route exact path="/isslocation">
          <IssLocation />
        </Route>
      </Switch>
    </div>
  );
}
