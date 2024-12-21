import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Main = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  return (
    <>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main className="pt-16 min-h-screen wrapper flex">
        <Menu isOpen={isMenuOpen} />
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Main;
