import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./layouts/LogIn";
import SignUpScreen from "./layouts/SingUp";
import "./App.css";
import SidebarNav from "./components/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/LogIn">
          <LoginScreen/>
        </Route>
        <Route path="/SignUp">
          <SignUpScreen/>
        </Route>
        <Route path="/pruebas">
          <SidebarNav pages={[
            {
              title: "Dashboard",
              href: "/dashboard",
              icon: <DashboardIcon/>
            },
            {
              title: "Users",
              href: "/users",
              icon: <PeopleIcon/>
            }
          ]}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
