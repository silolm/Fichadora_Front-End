import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInScreen from "../../screens/LogIn";
import "./App.css";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/LogIn">
          <LogInScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
