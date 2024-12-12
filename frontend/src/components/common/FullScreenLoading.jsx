import React from "react";
import Loading from "./Loading";

const FullScreenLoading = ({ size = "md" }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10 bg-black flex justify-center items-center">
      <Loading size={size} />
    </div>
  );
};

export default FullScreenLoading;
