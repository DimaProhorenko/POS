import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div className="form-control w-full">
      {label && (
        <div className="label capitalize">
          <label htmlFor={label} className="label-text text-lg">
            {label}
          </label>
        </div>
      )}
      <input id={label} className="input input-bordered w-full" {...props} />
    </div>
  );
};

export default Input;
