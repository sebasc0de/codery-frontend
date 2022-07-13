import { Product } from "../interfaces/Product";
import { ProductCard } from "./ProductCard";
import { SearchBarProps } from "./Searchbar";
import { ToastPortal } from "./ToastPortal";
import { ToastRefProps } from "../types";
import { useEffect, useRef, useState } from "react";
import authStore from "../store/auth";

export const SearchProduct = ({ keyword, searchInDatabase }: Props) => {
  const [results, setResults] = useState<Product[]>([]);

  // User token
  const token = authStore((state) => state.token);

  // Add toast handler
  const toastRef = useRef<ToastRefProps>();
  const addToast = (title: string) => {
    toastRef.current?.addMessage({
      title,
      msg: "Se agrego al carrito",
    });
  };

  useEffect(() => {
    searchInDatabase(token, keyword).then(setResults);
  }, [keyword]);

  return (
    <div className="h-72 overflow-y-scroll">
      <ToastPortal ref={toastRef} />
      {results.map((item) => (
        <ProductCard
          addToast={addToast}
          withButton
          key={item.id}
          product={item}
        />
      ))}
    </div>
  );
};

interface Props extends SearchBarProps {
  keyword: string;
}
