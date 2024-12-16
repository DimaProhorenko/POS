import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { toast } from "react-hot-toast";

import InputWithIcon from "../../components/common/InputWithIcon";
import { useCreateUserMutation } from "./userManagementApiSlice";

const CreateUserForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "cashier", // Default role
  });
  const [createUser, { isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      await createUser(formValues).unwrap();
      setFormValues({
        name: "",
        email: "",
        password: "",
        role: "Cashier", // Default role
      });
      toast.success("User was created");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.data.msg);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputWithIcon
        icon={MdPerson}
        name="name"
        placeholder="Full name"
        type="text"
        value={formValues.fullName}
        onChange={handleInputChange}
      />
      <InputWithIcon
        icon={MdEmail}
        name="email"
        placeholder="Email"
        type="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <InputWithIcon
        icon={FaLock}
        name="password"
        placeholder="Password"
        type="password"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <select
        name="role"
        className="select select-bordered w-full"
        value={formValues.role}
        onChange={handleInputChange}
      >
        <option value="cashier">Cashier</option>
        <option value="manager">Manager</option>
      </select>

      <button type="submit" className="btn btn-primary btn-block">
        {isLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          "Create"
        )}
      </button>
    </form>
  );
};

export default CreateUserForm;
