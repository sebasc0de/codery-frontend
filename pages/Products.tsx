import { getProducts } from "../helpers/product";
import { Header, Logo, ProductCard } from "../components";
import { Product } from "../types";
import { useEffect, useState } from "react";
import authStore from "../store/auth";

export const Products = () => {
  const token = authStore((state) => state.token);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(token).then(setProducts);
  }, []);

  return (
    <section className="flex flex-col justify-between">
      <Header />
      <ul>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ul>
      <Logo small />
    </section>
  );
};
