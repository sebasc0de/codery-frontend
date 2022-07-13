export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  user: string;
}

export interface ProductInCart extends Product {
  quantity: number;
  price: number;
}
