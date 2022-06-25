import { Box } from "./Box";
import { createProduct } from "../helpers/product";
import { ImageUploader } from "./ImageUploader";
import { useField } from "../hooks/useField";
import productStore from "../store/product";

export const ProductForm = () => {
  const { value, onChange } = useField({
    name: "",
    price: 0,
  });
  const image = productStore((state) => state.image);

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <ImageUploader />
      <Box>
        <input
          value={value.name}
          name="name"
          onChange={(e) => onChange(e.target)}
          placeholder="Nombre del producto"
        />
        <input
          value={value.price}
          name="price"
          onChange={(e) => onChange(e.target)}
          placeholder="Precio del producto"
        />
        <button>Crear producto</button>
      </Box>
    </div>
  );
};
