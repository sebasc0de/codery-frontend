import { LoginForm, Logo, Spacer, ToastPortal } from "../components/index";

export const Login = () => {
  return (
    <section className="column">
      {/* Logo */}
      <Logo />
      <LoginForm />
      <Spacer />
      <ToastPortal />
    </section>
  );
};
