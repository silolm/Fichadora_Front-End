import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithLayout } from "./components/routeWithLayout/routeWithLayout";
import MainLayout from "./layouts/main/Main";
import LogIn from "./screens/LogIn";
import LogInLayout from "./layouts/login";
import SignUp from "./screens/SingUp";
import Employee from "./screens/Employee";
import Listp from "./screens/Listp";

export const Routes = () => (
  <Switch>
    <RouteWithLayout screen={LogIn} layout={LogInLayout} path="/LogIn"/>
    <RouteWithLayout screen={SignUp} layout={MainLayout} isPrivate={true} path="/SignUp"/>
    <RouteWithLayout screen={Employee} layout={MainLayout} isPrivate={true} path="/employee"/>
    <RouteWithLayout screen={Listp} layout={MainLayout} isPrivate={true} path="/list"/>
  </Switch>
);