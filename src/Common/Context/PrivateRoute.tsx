import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  // Kết hợp các điều kiện để giảm lặp code
  if (!user || (user.role !== 1 && user.role !== 3)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>; 
};

export default PrivateRoute;