import { Shipping, ProductInCart, User } from "./index";

export type Order = {
  shippingData: Shipping;
  items: ProductInCart[];
  user: User;
  delivered: boolean;
};
