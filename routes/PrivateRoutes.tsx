import { Dashboard, CreateOrder, CreateProduct } from "../pages/index";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import authStore from "../store/auth";

export const PrivateRoutes = () => {
  const navigate = useNavigate();

  const { user } = authStore();

  useEffect(() => {
    !user && navigate("/login");
  }, [user]);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order" element={<CreateOrder />} />
      <Route path="/product" element={<CreateProduct />} />
    </Routes>
  );
};
