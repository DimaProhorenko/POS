import React from "react";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { Navigate } from "react-router-dom";
import FullScreenLoading from "../components/common/FullScreenLoading";

const ProtectedRoute = ({ children }) => {
  const { data, isLoading } = useGetMeQuery();

  if (isLoading) {
    return <FullScreenLoading size="lg" />;
  }
  console.log(data);
  return data ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
