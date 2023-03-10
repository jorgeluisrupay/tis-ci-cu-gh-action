import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Details } from "./screens/Details";
import { LoginScreen } from "./screens/LoginScreen";
import { MovieList } from "./screens/MovieList";

export const Rute = () => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("token");
    token ? setAuth(true) : setAuth(false);
  }, []);

  const authLogin = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };

  return (
    <Routes>
      {!auth && (
        <>
          <Route path="/" element={<LoginScreen authLogin={authLogin} />} />
        </>
      )}
      {auth && (
        <>
          <Route path="movie" element={<MovieList logout={logout} />} />
          <Route path="movie/detail/:id" element={<Details />} />
        </>
      )}
      <Route path="*" element={<Navigate to={auth ? "/movie" : "/"} />} />
    </Routes>
  );
};
