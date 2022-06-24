import { useField } from "../hooks/useField";

export const ShippingForm = () => {
  const adress = useField({ type: "text" });
  const phone = useField({ type: "text" });
  const city = useField({ type: "text" });
  const notes = useField({ type: "text" });

  return (
    <div>
      <input {...adress} placeholder="Ingresa tu direccion" />
      <input {...phone} placeholder="Ingresa tu telefono" />
      <input {...city} placeholder="Ingresa tu localidad" />
      <input {...notes} placeholder="Agrega una nota para el delivery..." />
    </div>
  );
};
