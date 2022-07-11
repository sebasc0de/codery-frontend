import { Product, ProductInCart } from "../types";
import create from "zustand";

interface MyState {
  items: number;
  cart: { [key: string]: ProductInCart };
  addToCart: (product: Product, count: number) => void;
}

const cartStore = create<MyState>()((set, get) => ({
  cart: {},
  items: 0,
  addToCart(product, quantity) {
    set((prev) => ({
      cart: {
        ...prev.cart,
        [product.id]: {
          ...product,
          quantity,
        },
      },
    }));
  },
}));

export default cartStore;
