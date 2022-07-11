import { ProductInCart } from "../types";

export const CartItem = (product: ProductInCart) => {
  return (
    <div className="product-card items-center flex gap-5">
      <img className="w-14 h-14 object-cover rounded-md" src={product.image} />
      <div>
        <h6>
          {product.name} x{product.quantity}
        </h6>
        <p className="text-xs">Precio: ${product.price}</p>
      </div>
    </div>
  );
};
