import { Product } from "../types";

export const ProductCard = ({ name, price, image }: Product) => {
  return (
    <div className="product-card items-center flex gap-3">
      <img className="w-16 object-cover" src={image} />
      <div>
        <h5>{name}</h5>
        <p>Precio: ${price}</p>
      </div>
    </div>
  );
};
