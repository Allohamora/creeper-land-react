import React from 'react';
import Case from './Case';
import Main from './Main';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Main} path="/" exact />
    <Route component={Case} path="/case/:id" exact />

    <Redirect to="/" />
  </Switch>
);

export default Routes;
