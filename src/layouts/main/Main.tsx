import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpScreen from "../../screens/SingUp";
import SidebarNav from "./components/sidebar";
import "./App.css";

function Main() {
  return (
    <Router>
      <SidebarNav open variant={"permanent"}/>
      <Switch>
        <Route path="/SignUp">
          <SignUpScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
