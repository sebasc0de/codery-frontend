import { Product } from "../types";

export const ProductCard = ({ name, price, image }: Product) => {
  return (
    <div className="product-card items-center flex gap-5">
      <img className="w-14 h-14 object-cover rounded-md" src={image} />
      <div>
        <h5>{name}</h5>
        <p className="text-sm">Precio: ${price}</p>
      </div>
    </div>
  );
};
