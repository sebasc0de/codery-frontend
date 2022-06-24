import ReactDOM from "react-dom/client";
import { PrivateRoutes, PublicRoutes } from "../routes/index";
import { BrowserRouter } from "react-router-dom";
import "../styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PublicRoutes />
    <PrivateRoutes />
  </BrowserRouter>
);
