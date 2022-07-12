import { Box } from "./Box";
import { Button } from "./Button";
import { createProduct } from "../helpers/product";
import { ImageUploader } from "./ImageUploader";
import { useField } from "../hooks/useField";
import authStore from "../store/auth";
import productStore from "../store/product";

export const ProductForm = () => {
  const token = authStore((state) => state.token);
  const image = productStore((state) => state.image);

  const { value, onChange } = useField({
    name: "",
    price: 0,
  });

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <ImageUploader />
      <Box>
        <input
          name="name"
          onChange={(e) => onChange(e.target)}
          placeholder="Nombre del producto"
        />
        <input
          name="price"
          onChange={(e) => onChange(e.target)}
          placeholder="Precio del producto"
        />
        <Button
          buttonText="Crear producto"
          onClick={() => createProduct(value.name, value.price, image, token)}
        />
      </Box>
    </div>
  );
};
