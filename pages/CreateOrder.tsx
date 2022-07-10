import { Header, Logo, Searchbar, Wrapper } from "../components";
import { searchProductByName } from "../helpers/product";

export const CreateOrder = () => {
  return (
    <Wrapper className="flex flex-col justify-between">
      <Header />
      <Searchbar searchInDatabase={searchProductByName} />
      <p>hol</p>
      <Logo small />
    </Wrapper>
  );
};
