import { Logo, Title, Navigate, Spacer } from "../components/index";

export const HeroSection = () => {
  return (
    <section className="column">
      <Logo />
      <div>
        <Title
          preTitle="<Codery/>"
          space="mt-3"
          title="¡Controla tu delivery!"
          parraph="Ya seas cliente o restaurante, te
    damos el control sobre tu pedido en tiempo real."
        />
        <Navigate text="Comenzar" url="/login" />
      </div>
      <Spacer />
    </section>
  );
};
