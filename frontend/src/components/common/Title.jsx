import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="text-3xl mb-3 pb-3 border-b border-neutral-700">
      {children}
    </h2>
  );
};

export default Title;
