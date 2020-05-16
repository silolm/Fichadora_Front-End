import React, { createContext, ReactNode, useState } from "react";
import authService from "../services/authService";

interface IAuthContext {
  isAuthenticated: boolean
  logout: () => void
  login: (user: string, password: string) => Promise<boolean>
  token: string
  DNI: string
}

const initialState: IAuthContext = {
  isAuthenticated: false,
  logout: () => {},
  login: async () => false,
  token: "",
  DNI: ""
};

export const AuthContext = createContext(initialState);

interface IProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: IProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [DNI, setDNI] = useState("");

  const login = async (nickname: string, password: string) => {
    const result = await authService.login(nickname, password);
    if (result) {
      setToken(result);
      setIsAuth(true);
      setDNI(nickname);
      return true;
    } else return false;
  };

  return (
    <AuthContext.Provider value={{
      login: login,
      isAuthenticated: isAuth,
      logout: () => {
        setIsAuth(false);
        setToken("");
      },
      token: token,
      DNI: DNI
    }}>
      {children}
    </AuthContext.Provider>
  );
};