import * as React from "react";
import { AuthContext } from "src/state";
import { api } from "src/api";

export const useAuth = () => {
  const { login, logout, ...state } = React.useContext(AuthContext);

  const [{ loading, error }, setLoginState] = React.useState<{
    loading?: boolean;
    error?: string;
  }>({});

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoginState({ loading: true, error: "" });
    try {
      await api.login({ email, password });
    } catch {
      setLoginState({
        loading: false,
        error:
          "Network failure: unable to login, please try again with an email address which begins with the letter 'a'",
      });
      return;
    }
    setLoginState({ loading: false, error: "" });
    login({ email });
  };

  return { ...state, loading, error, login: handleLogin, logout };
};
