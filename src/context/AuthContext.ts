// import React, { createContext, useState, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../config/api";

// export interface AuthContextType {
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => void;
//   logout: () => void;
// }

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const login = async (email: string, password: string) => {
//     try {
//       const result = await axiosInstance.post("/auth/login", { email, password });
//       sessionStorage.setItem("accessToken", result.data.accessToken);
//       setIsAuthenticated(true);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const logout = () => {
//     sessionStorage.removeItem("accessToken");
//     setIsAuthenticated(false);
//     navigate("/");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };