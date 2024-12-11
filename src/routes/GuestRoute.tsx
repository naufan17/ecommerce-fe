import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface GuestRouteProps {
  children: JSX.Element
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const accessToken = sessionStorage.getItem("accessToken");
  const location = useLocation();

  if (accessToken) return <Navigate to="/profile" state={{ from: location }} replace />;

  return children;
};

export default GuestRoute;