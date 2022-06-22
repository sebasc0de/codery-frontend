import "../styles/styles.scss";
import ReactDOM from "react-dom/client";
import { PrivateRoutes, PublicRoutes } from "../routes/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PublicRoutes />
    <PrivateRoutes />
  </BrowserRouter>
);
