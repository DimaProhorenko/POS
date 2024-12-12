import React from "react";
import CreateUserForm from "../features/user-management/CreateUserForm";

const CreateUser = () => {
  return (
    <div className="wrapper">
      <div className="max-w-md mx-auto pt-14">
        <h1 className="text-3xl mb-3">Create a user</h1>
        <CreateUserForm />
      </div>
    </div>
  );
};

export default CreateUser;
