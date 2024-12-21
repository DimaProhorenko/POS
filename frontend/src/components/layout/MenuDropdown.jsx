import React from "react";
import { Link } from "react-router-dom";

const MenuDropdown = ({ icon: Icon, links, ...props }) => {
  return (
    <div className="dropdown dropdown-right">
      <div tabIndex={0} role="button" className="btn m-1">
        <Icon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDropdown;
