import { CartItem } from "./CartItem";
import { createPortal } from "react-dom";
import cartStore from "../store/cart";

export const Cart = () => {
  const cart = cartStore((state) => state.cart);

  const show = false;

  return (
    <>
      {show &&
        createPortal(
          <div className="side-modal sideIn">
            <button className="absolute w-fit top-0 right-4 text-lg bg-transparent text-black">
              X
            </button>
            <div>
              {Object.values(cart).map((item) => (
                <CartItem {...item} key={item.id} />
              ))}
            </div>
            <button>Completar orden</button>
          </div>,
          document.querySelector("#portal") as any
        )}
    </>
  );
};
