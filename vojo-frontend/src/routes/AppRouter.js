import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../views/Homepage";
import Login from "../views/Login";

import { AuthContext } from "../contexts/AuthContext";

export default function AppRouter() {
  const { authData } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        {authData.logged ? (
          <Route exact path="/" component={Homepage} />
        ) : (
            <Route exact path="/" component={Login} />
          )}
      </Switch>
    </Router>
  );
}
