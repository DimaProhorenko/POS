import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen wrapper">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
