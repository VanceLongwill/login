import * as React from "react";

export interface User {
  email: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

export interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthState & AuthActions>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const defaultState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const AuthProvider: React.FC = ({ children }) => {
  // @TODO: add localStorage persistence
  const [state, setState] = React.useState(defaultState);

  const login = React.useCallback((user: User) => {
    setState((state) => ({ ...state, isLoggedIn: true, user }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const logout = React.useCallback(() => {
    setState((state) => ({ ...state, isLoggedIn: false, user: null }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
