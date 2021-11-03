import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Profile from "./Profile";
import Home from "./Home";
import Astronauts from "./Astronauts";
import IssLocation from "./IssLocation";

export default function App() {
  return (
    <>
      <Menu />

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
    </>
  );
}
