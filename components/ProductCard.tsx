import { Product } from "../interfaces/index";
import { ToastPortal } from "./ToastPortal";
import { ToastRefProps } from "../types";
import { useRef, useState } from "react";
import cartStore from "../store/cart";

export const ProductCard = (product: Product) => {
  const [counter, setCounter] = useState(1);

  // Cart global store
  const addToCart = cartStore((state) => state.addToCart);

  // Add toast handler
  const toastRef = useRef<ToastRefProps>();
  const addToast = () => {
    toastRef.current?.addMessage({
      title: product.name,
      msg: "Se agrego al carrito",
    });
  };

  // Add to cart handler
  const addToCartHandler = () => {
    setCounter((prev) => prev + 1);
    addToCart(product, counter);
    addToast();
  };

  return (
    <>
      <ToastPortal ref={toastRef} />
      <div className="product-card items-center flex gap-5">
        <img
          className="w-14 h-14 object-cover rounded-md"
          src={product.image}
        />
        <div>
          <h6>{product.name}</h6>
          <p className="text-xs">Precio: ${product.price}</p>
        </div>
        <button
          className="w-5 h-5 absolute top-2 right-2"
          onClick={addToCartHandler}
        >
          +
        </button>
      </div>
    </>
  );
};
