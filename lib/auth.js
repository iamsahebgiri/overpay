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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = (name, email, password, redirect) => {
    setLoading(true);

    setTimeout(() => {
      setUser({ name, email, password });
      Router.push(redirect);
      setLoading(false);
    }, 3000);
  };

  const signout = () => {
    Router.push("/");

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  return {
    user,
    loading,
    signup,
    signout,
  };
}
