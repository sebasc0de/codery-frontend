export type User = {
  id: string;
  archived?: boolean;
  password?: string;
  avatar?: string;
  membership: string;
  email: string;
};

export type Order = {
  shippingData: Shipping;
  items: OrderItem[];
  user: User;
  delivered: boolean;
};

export type Shipping = {
  adress: string;
  city: string;
  province: string;
  zipCode: string;
  notes: string;
};

export type OrderItem = {
  productName: string;
  quantity: number;
  price?: number;
};
