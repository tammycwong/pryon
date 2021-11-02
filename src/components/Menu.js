import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Home from "./Home";
import Astronauts from "./Astronauts";
import IssLocation from "./IssLocation";
import SignUp from "./SignUp";
import image from "../images/main-logo.png"

export default function Menu() {
  return (
    <div className="menu">
      
      <div className="links">
      <Link className="" to="/">
      <img className="logo" src={image} alt=""/>
      </Link>
      <Link className="" to="/signup">
        Sign Up
      </Link>
      <Link className="" to="/login">
        Log In
      </Link>
      <Link className="" to="/profile">
        Profile
      </Link>
      <Link className="" to="/astronauts">
        Astronauts
      </Link>
      <Link className="" to="/isslocation">
        ISS Location
      </Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/astronauts">
          <Astronauts />
        </Route>

        <Route exact path="/isslocation">
          <IssLocation />
        </Route>

        <Route exact path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </div>
  );
}
