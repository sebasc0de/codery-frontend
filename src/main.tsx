import {
  Welcome,
  Login,
  Register,
  Dashboard,
  CreateOrder,
  CreateProduct,
} from "../pages/index";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order" element={<CreateOrder />} />
      <Route path="/product" element={<CreateProduct />} />
    </Routes>
  </BrowserRouter>
);
