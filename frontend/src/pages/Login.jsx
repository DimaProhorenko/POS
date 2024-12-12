import React from "react";

import Logo from "../components/common/Logo";
import LoginForm from "../features/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen md:gap-4">
      <div className="hidden md:block flex-1 bg-[url('/images/login-bg.webp')] bg-cover bg-center bg-no-repeat"></div>
      <div className="flex-1 pt-32 px-4 flex flex-col items-center justify-center md:pt-0">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
