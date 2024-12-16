import React from "react";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { Navigate } from "react-router-dom";
import FullScreenLoading from "../components/common/FullScreenLoading";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { data, isLoading, isError } = useGetMeQuery();
  console.log(data);

  if (isLoading) {
    return <FullScreenLoading size="lg" />;
  }

  if (!data || isError) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles) {
    if (!allowedRoles.includes(data.role)) {
      return <Navigate to="/dashboard" />;
    }
  }
  return children;
};

export default ProtectedRoute;
