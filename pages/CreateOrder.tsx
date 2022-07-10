import { Header, Logo, Searchbar, Wrapper } from "../components";

export const CreateOrder = () => {
  return (
    <Wrapper className="flex flex-col justify-between">
      <Header />
      <Searchbar />
      <Logo small />
    </Wrapper>
  );
};
