import React, { createContext, ReactNode, useState } from "react";
import authService from "../services/authService";

interface IAuthContext {
  isAuthenticated: boolean
  logut: () => void
  login: (user: string, password: string) => Promise<boolean>
  token: string
}

const initialState: IAuthContext = {
  isAuthenticated: false,
  logut: () => {},
  login: async () => false,
  token: ""
};

export const AuthContext = createContext(initialState);

interface IProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: IProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = async (nickname: string, password: string) => {
    const result = await authService.login(nickname, password);
    if (result) {
      setToken(result);
      setIsAuth(true);
      return true;
    } else return false;
  };

  return (
    <AuthContext.Provider value={{
      login: login,
      isAuthenticated: isAuth,
      logut: () => {
        setIsAuth(false);
        setToken("");
      },
      token: token
    }}>
      {children}
    </AuthContext.Provider>
  );
};