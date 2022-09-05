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

function useProvideAuth() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@mail.com",
    password: "password",
  });
  const [loading, setLoading] = useState(false);
  const [retriesIn, setRetriesIn] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setRetriesIn((retriesIn) => retriesIn - 1);
    }, 1000);

    if (retriesIn < 0) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [retriesIn]);

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
      }
    }, 3000);
  };

  const signout = () => {
    Router.push("/");

    setUser(null);
  };

  return {
    user,
    loading,
    signup,
    signin,
    verifyAccount,
    retriesIn,
    signout,
  };
}
