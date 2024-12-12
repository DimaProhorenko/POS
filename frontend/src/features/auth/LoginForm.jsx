import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import InputWithIcon from "../../components/InputWithIcon";
import { useLoginMutation } from "./authApiSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await login({ email, password }).unwrap();
      console.log("Logged in successfully:", res);
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-4 mt-4 max-w-lg w-full" onSubmit={handleSubmit}>
      <InputWithIcon
        type="text"
        placeholder="Email"
        icon={MdEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputWithIcon
        type="text"
        placeholder="Password"
        icon={FaLock}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary btn-block">Login</button>
    </form>
  );
};

export default LoginForm;
