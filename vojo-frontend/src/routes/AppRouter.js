import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../views/Homepage";
import EditJob from '../views/EditJob';
import Login from "../views/Login";
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/edit/:id" component={EditJob} />
      </Switch>
    </Router>
  );
}
