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
        <Link className="" to="/">
          <img className="logo" src={image} alt="" />
        </Link>
        <div>

        {!isAuthenticated && 
          <Link className="" onClick={() => loginWithRedirect()}>Login </Link>}

        {isAuthenticated ? ( 
          <Link className="" to="/profile">
            Profile
          </Link>
        ) : null }

          {isAuthenticated ? (
            <Link className="" to="/astronauts">
              Astronauts
            </Link>
          ) : null}

          {isAuthenticated ? (
            <Link className="" to="/isslocation">
              ISS Location
            </Link>
          ) : null}

          {isAuthenticated && <Link onClick={() => logout()}>Log Out</Link>}
        </div>
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
