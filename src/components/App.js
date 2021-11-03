import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Profile from "./Profile";
import Home from "./Home";
import Astronauts from "./Astronauts";
import IssLocation from "./IssLocation";
import Auth0ProviderWithHistory from './auth0Provider';

export default function App() {
  return (
    <Auth0ProviderWithHistory>
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
    </Auth0ProviderWithHistory>
  );
}
