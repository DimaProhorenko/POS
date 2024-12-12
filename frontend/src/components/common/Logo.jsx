import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={`${className} text-2xl`}>
      Pyle
    </Link>
  );
};

export default Logo;
