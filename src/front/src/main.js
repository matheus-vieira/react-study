// Importando o React
import React from "react";
// Importando o component Home

import Home from "./components/home/home";
import GitHubUsers from "./components/github_users/github_users";
import GitHubUsersDetails from "./components/github_user/github_user_details";

import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
  <Container>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={GitHubUsers} />
      <Route path='/details/:username' component={GitHubUsersDetails} />
    </Switch>
  </Container>
  </main>  
);

export default Main;