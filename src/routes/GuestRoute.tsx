// import React, { ReactNode }  from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/UseAuth";

// interface GuestRouteProps {
//   children: ReactNode;
// }

// const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
//   const isAuthenticated = useAuth();

//   if (isAuthenticated) return <Navigate to="/" />;

//   return <>{children}</>;
// };

// export default GuestRoute;