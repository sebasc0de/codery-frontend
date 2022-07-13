import cartStore from "../store/cart";
import { Header, Message, Searchbar } from "../components";
import { searchProductByName } from "../helpers/product";

export const CreateOrder = () => {
  const cart = cartStore((state) => state.cart);

  return (
    <section className="flex flex-col justify-between">
      <Header />
      <Message
        img="./icons/burger.png"
        title="1. Agrega tus productos"
        message="Elije los productos que deseas incluir en tu orden."
      />
      <Searchbar searchInDatabase={searchProductByName} />
      <button>Continuar</button>
    </section>
  );
};
