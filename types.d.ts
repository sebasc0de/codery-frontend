export type User = {
  id: string;
  archived: boolean;
  avatar?: string;
  email: string;
  role: string;
};

export type Order = {
  shippingData: Shipping;
  items: OrderItem[];
  user: User;
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
