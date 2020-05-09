import React from "react";
import { Route } from "react-router-dom";

interface IProps {
  screen: any
  layout: any
  path?: string
}

export const RouteWithLayout = ({ layout: Layout, screen: Screen, ...rest }: IProps) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Screen {...matchProps} />
        </Layout>
      )}
    />
  );
};