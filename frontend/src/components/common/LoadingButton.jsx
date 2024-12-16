import React from "react";
import Loading from "./Loading";

const LoadingButton = ({
  children,
  className,
  loadingSize,
  isLoading,
  ...props
}) => {
  return (
    <button className={`btn btn-primary ${className}`}>
      {isLoading ? <Loading size={loadingSize} /> : children}
    </button>
  );
};

export default LoadingButton;
