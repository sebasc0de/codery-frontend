import { Header, Logo, Message, Searchbar } from "../components";
import { searchProductByName } from "../helpers/product";

export const CreateOrder = () => {
  return (
    <section>
      <Header />
      <Message
        img="./icons/burger.png"
        title="1. Agrega tus productos"
        message="Elije los productos que deseas incluir en tu orden."
      />
      <Searchbar searchInDatabase={searchProductByName} />
      <Logo small />
    </section>
  );
};
