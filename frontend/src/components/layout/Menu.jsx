import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import MenuDropdown from "./MenuDropdown";

const Menu = ({ isOpen }) => {
  const classes = classNames({
    "w-24 pointer-events-auto": isOpen,
    "w-0 pointer-events-none overflow-hidden": !isOpen,
  });
  return (
    <nav
      className={`h-screen bg-transparent ${classes} transition-all flex flex-col items-center gap-y-4`}
    >
      <div className="dropdown dropdown-right">
        <MenuDropdown
          icon={RxDashboard}
          links={[
            { text: "Create Product", to: "/products/create" },
            { text: "Products", to: "/products" },
          ]}
        ></MenuDropdown>
      </div>
    </nav>
  );
};

export default Menu;
