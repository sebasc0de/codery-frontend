import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { CreateOrder, Start } from "../pages/index";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/create" element={<CreateOrder />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
