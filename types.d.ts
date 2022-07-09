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
}

export type Order = {
  shippingData: Shipping;
  items: OrderItem[];
  user: User;
  delivered: boolean;
};

export type Shipping = {
  adress: string;
  phone: string;
  city: string;
  notes: string;
};

export type OrderItem = {
  productName: string;
  quantity: number;
  price?: number;
};
