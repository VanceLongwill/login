import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "src/theme";
import { LoginPage, WelcomePage } from "src/views";
import { ProtectedRoute } from "src/components";
import { useAuth } from "src/hooks";
import { AuthProvider, User } from "src/state";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

export const App = () => {
  const { login, logout, isLoggedIn, user, loading, error } = useAuth();
  return (
    <Switch>
      <ProtectedRoute exact path="/" allowed={isLoggedIn}>
        <WelcomePage user={user as User} logout={logout} />
      </ProtectedRoute>
      <ProtectedRoute path="/login" allowed={!isLoggedIn} redirect="/">
        <LoginPage login={login} loading={loading} error={error} />
      </ProtectedRoute>
    </Switch>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
