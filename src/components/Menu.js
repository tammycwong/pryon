import React from "react";
import {Link, Switch, Route} from 'react-router-dom';
import Profile from "./Profile";
import Login from "./Login";

import Astronauts from "./Astronauts";
import IssLocation from "./IssLocation";
// import Welcome from "./Welcome";
import Main from "./Main";


export default function Menu() {
  return (
    <div>
       <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>

        <Route exact path="/profile">
          <Profile  />
        </Route>

        <Route exact path="/login">
          <Login  />
        </Route>

        <Route exact path="/astronauts">
          <Astronauts />
        </Route>

        <Route exact path="/isslocation">
          <IssLocation  />
        </Route>
      </Switch>

        <Link className="" to="/signup">Sign Up</Link>
        <Link className="" to="/login">Log In</Link>
        <Link className="" to="/profile">Profile</Link>
        <Link className="" to="/astronauts">Astronauts</Link>
        <Link className="" to="/isslocation">ISS Location</Link>
    </div>
  );
}
