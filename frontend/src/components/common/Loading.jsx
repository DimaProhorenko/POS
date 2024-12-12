import React from "react";
import classNames from "classnames";

const Loading = ({ size = "md" }) => {
  const sizeClass = classNames({
    [`loading-${size}`]: size, // Dynamically sets loading-md, loading-lg, etc.
  });
  return <span className={`loading loading-spinner ${sizeClass}`}></span>;
};

export default Loading;
