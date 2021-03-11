import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, exact = true, path, redirect = "/" }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      {isAuth ? (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      ) : (
        <Redirect to={redirect} />
      )}
    </>
  );
}

export { PrivateRoute };
