import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Case } from './Case';
import { Main } from './Main';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Switch>
    <Route component={Main} path="/" exact />
    <Route component={Case} path="/case/:id" exact />

    <Redirect to="/" />
  </Switch>
);
