import { Link } from "react-router-dom";
import { Logo, Title } from "../components/index";

export const HeroSection = () => {
  return (
    <section className="column">
      <div>
        <Logo />
        <Title
          preTitle="<Codery/>"
          space="mt-3"
          title="¡Controla tu delivery!"
          parraph="Ya seas cliente o restaurante, te
    damos el control sobre tu pedido en tiempo real."
        />
        <Link to="/login">
          <button className="mt-5">Comenzar</button>
        </Link>
      </div>
    </section>
  );
};
