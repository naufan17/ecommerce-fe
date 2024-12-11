import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = sessionStorage.getItem("accessToken");
  const location = useLocation();

  if (!accessToken) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default ProtectedRoute;