import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Link to="/create-product">
        <button>Crear producto</button>
      </Link>
      <Link to="/products">
        <button>Productos</button>
      </Link>
    </>
  );
};
