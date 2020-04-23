import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithLayout } from "./components/routeWithLayout/RouteWithLayout";
import MainLayout from "./layouts/main/Main";
import LogIn from "./screens/LogIn";
import LogInLayout from "./layouts/login";
import SignUp from "./screens/SingUp";

export const Routes = () => (
  <Switch>
    <RouteWithLayout screen={LogIn} layout={LogInLayout} path="/LogIn"/>
    <RouteWithLayout screen={SignUp} layout={MainLayout} path="/SignUp"/>
    <RouteWithLayout screen={LogIn} layout={MainLayout} path="/prueba"/>
  </Switch>
);