import { Box, Header, Logo, Wrapper } from "../components";
import { useField } from "../hooks/useField";

export const CreateProduct = () => {
  const name = useField({ type: "string" });
  const price = useField({ type: "number" });

  return (
    <Wrapper className="column">
      <Header />
      <Box>
        <input {...name} placeholder="Nombre del producto" />
        <input {...price} min={0} placeholder="Precio del producto" />
        <button>Crear producto</button>
      </Box>
      <Logo small />
    </Wrapper>
  );
};
