export type User = {
  id: string;
  archived?: boolean;
  password?: string;
  avatar?: string;
  suscription: string;
  email: string;
};

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  user: string;
}

export type Order = {
  shippingData: Shipping;
  items: ProductInCart[];
  user: User;
  delivered: boolean;
};

export type Shipping = {
  adress: string;
  phone: string;
  city: string;
  notes: string;
};

export interface ProductInCart extends Product {
  quantity: number;
  price: number;
}
