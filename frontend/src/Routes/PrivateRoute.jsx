import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
