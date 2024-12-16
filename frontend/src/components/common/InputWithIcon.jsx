import React from "react";

const InputWithIcon = ({ icon: Icon, ...props }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input className="grow" {...props} />
      <Icon className="size-4" />
    </label>
  );
};

export default InputWithIcon;
