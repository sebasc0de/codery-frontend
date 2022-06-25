import { Header, Logo, ProductForm, Wrapper } from "../components";

export const CreateProduct = () => {
  return (
    <Wrapper className="column">
      <Header />
      <ProductForm />
      <Logo small />
    </Wrapper>
  );
};
