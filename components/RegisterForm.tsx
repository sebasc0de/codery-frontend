import { Button } from "./Button";
import { registerUser } from "../helpers/registerUser";
import { Small } from "./Small";
import { Title } from "./Title";
import { useField } from "../hooks/useField";
import authStore from "../store/auth";

export const RegisterForm = () => {
  const { setUser } = authStore();

  // Manage email and password onChange handler
  const { value, onChange } = useField({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = value;

  return (
    <div>
      {/* Title */}
      <Title title="¡Toma el control!" parraph="Hasta que llegue el delivery" />
      <input
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        onChange={(e) => onChange(e.target)}
      />
      <input
        type="email"
        name="email"
        placeholder="Ingresa tu email"
        onChange={(e) => onChange(e.target)}
      />
      <input
        name="password"
        type="password"
        placeholder="Ingresa tu password"
        onChange={(e) => onChange(e.target)}
      />

      <Button
        buttonText="Crear mi cuenta"
        onClick={() => registerUser(name, email, password)}
        StateAction={setUser}
      />
      <Small
        withLink
        text="¿Ya tienes cuenta?"
        textLink="Inicia sesion"
        routerLink="/login"
      />
    </div>
  );
};
