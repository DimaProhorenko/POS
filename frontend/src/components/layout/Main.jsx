import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoute";

const Main = ({ children }) => {
  return (
    <ProtectedRoute>
      <Header />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
    </ProtectedRoute>
  );
};

export default Main;
