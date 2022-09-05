import React, { useState, useEffect, useContext, createContext } from "react";
import Router from "next/router";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const DEFAULT_USER = {
  name: "John Doe",
  email: "johndoe@mail.com",
  password: "password",
};

function useProvideAuth() {
  const [user, setUser] = useState(DEFAULT_USER);
  const [loading, setLoading] = useState(false);

  const verifyAccount = (redirect) => {
    setLoading(true);

    setTimeout(() => {
      Router.push(redirect);
      setLoading(false);
    }, 3000);
  };

  const signup = (name, email, password, redirect) => {
    setLoading(true);

    setTimeout(() => {
      setUser({ name, email, password });
      Router.push(redirect);
      setLoading(false);
    }, 3000);
  };

  const signin = (email, password, redirect) => {
    setLoading(true);

    setTimeout(() => {
      if (user.email === email && user.password === password) {
        Router.push(redirect);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }, 3000);
  };

  const signout = () => {
    Router.push("/");
    setUser(DEFAULT_USER);
  };

  return {
    user,
    loading,
    signup,
    signin,
    verifyAccount,
    signout,
  };
}
