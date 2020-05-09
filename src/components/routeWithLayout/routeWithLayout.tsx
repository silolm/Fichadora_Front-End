import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../myHooks/useAuth";

interface IProps {
  screen: any
  layout: any
  path?: string
  isPrivate?: boolean
}

export const RouteWithLayout = ({ layout: Layout, screen: Screen, path, isPrivate = false }: IProps) => {
  const { isAuthenticated } = useAuth();

  if (isPrivate && !isAuthenticated) return <Redirect to="/LogIn"/>;

  return (
    <Route
      path={path}
      render={matchProps => (
        <Layout>
          <Screen {...matchProps} />
        </Layout>
      )}
    />
  );
};