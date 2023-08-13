import React from "react";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const [auth, setAuth] = React.useState(localStorage.getItem("token"));

  return (
    <div>
      {
        auth ? <Navigate to="/" /> : children
        //   !auth ? children : <Navigate to="/"/>
      }
    </div>
  );
};

export default PublicRoute;





