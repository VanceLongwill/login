import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  redirect?: string;
  allowed: boolean;
}

export const ProtectedRoute = ({
  redirect = "/login",
  allowed,
  children,
  ...props
}: ProtectedRouteProps) => {
  return (
    <Route {...props}>{allowed ? children : <Redirect to={redirect} />}</Route>
  );
};
