import React from "react";

const Card = ({ children, className }) => {
  return <div className={`shadow-lg ${className}`}>{children}</div>;
};

export default Card;
