import { Product } from "../interfaces/index";
import { useState } from "react";
import cartStore from "../store/cart";

export const ProductCard = ({
  product,
  addToast,
  withButton = false,
}: Props) => {
  const [counter, setCounter] = useState(1);

  // Cart global store
  const addToCart = cartStore((state) => state.addToCart);

  // Add to cart handler
  const addToCartHandler = () => {
    setCounter((prev) => prev + 1);
    addToCart(product, counter);
    addToast && addToast(product.name);
  };

  return (
    <>
      <div className="product-card items-center flex gap-5">
        <img
          className="w-14 h-14 object-cover rounded-md"
          src={product.image}
        />
        <div>
          <h6>{product.name}</h6>
          <p className="text-xs">Precio: ${product.price}</p>
        </div>
        {withButton && (
          <button
            className="w-5 h-5 absolute top-2 right-2"
            onClick={addToCartHandler}
          >
            +
          </button>
        )}
      </div>
    </>
  );
};

interface Props {
  product: Product;
  withButton?: boolean;
  addToast?: (title: string) => void;
}
