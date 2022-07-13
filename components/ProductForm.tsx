import { Box } from "./Box";
import { Button } from "./Button";
import { createProduct } from "../helpers/product";
import { ImageUploader } from "./ImageUploader";
import { ToastPortal } from "./ToastPortal";
import { ToastRefProps } from "../types";
import { useField } from "../hooks/useField";
import { useRef } from "react";
import authStore from "../store/auth";
import productStore from "../store/product";

export const ProductForm = () => {
  // Toast reference
  const toastRef = useRef<ToastRefProps>();

  // Add toast handler
  const addToastHandler = () => {
    toastRef.current?.addMessage({
      title: value.name,
      msg: "Tu producto se creo con exito",
    });
  };

  // Info from global store
  const token = authStore((state) => state.token);
  const image = productStore((state) => state.image);

  // Form onChange state
  const { value, onChange } = useField({
    name: "",
    price: 0,
  });

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <ToastPortal ref={toastRef} />
      <ImageUploader />
      <Box>
        <input
          name="name"
          autoComplete="off"
          onChange={(e) => onChange(e.target)}
          placeholder="Nombre del producto"
        />
        <input
          name="price"
          autoComplete="off"
          onChange={(e) => onChange(e.target)}
          placeholder="Precio del producto"
        />
        <Button
          buttonText="Crear producto"
          onClick={() => createProduct(value.name, value.price, image, token)}
          showNotification={addToastHandler}
        />
      </Box>
    </div>
  );
};
