import React from "react";
import Logo from "../common/Logo";
import { CiBellOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../features/profile/ProfileDropdown";

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="fixed w-full px-2 py-3 shadow-sm ">
      <div className="wrapper">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoClose className="size-6" />
              ) : (
                <IoMdMenu className="size-6" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <CiBellOn className="size-6" />
            </Link>
            <ProfileDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
