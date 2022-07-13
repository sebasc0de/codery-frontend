import { LoginForm, Logo, Spacer } from "../components/index";

export const Login = () => {
  return (
    <section className="column">
      {/* Logo */}
      <Logo />
      <LoginForm />
      <Spacer />
    </section>
  );
};
