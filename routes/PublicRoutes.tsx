import { Welcome, Login, Register } from "../pages/index";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import authStore from "../store/auth";

export const PublicRoutes = () => {
  const navigate = useNavigate();

  const { user } = authStore();

  useEffect(() => {
    user.email.length > 1 && navigate("/dashboard");
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
