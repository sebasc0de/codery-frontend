import { Box } from "./Box";
import { Button } from "./Button";
import { createProduct } from "../helpers/product";
import { ImageUploader } from "./ImageUploader";
import { Notification } from "./Notification";
import { useField } from "../hooks/useField";
import authStore from "../store/auth";
import productStore from "../store/product";
import usePortal from "../hooks/usePortal";

export const ProductForm = () => {
  const token = authStore((state) => state.token);
  const image = productStore((state) => state.image);

  const { addPortal, hidePortal, show } = usePortal();

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
          showNotification={addPortal}
          onClick={() => createProduct(value.name, value.price, image, token)}
        />
      </Box>
      <Notification show={show} setShow={hidePortal} msg="hola" />
    </div>
  );
};
