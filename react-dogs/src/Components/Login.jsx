import React from "react";
import style from "./Login.module.css";
import { Route } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
