import "../styles/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateOrder, Login, Register, Welcome } from "../pages/index";
import { Layout } from "../layouts/Layout";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateOrder />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
