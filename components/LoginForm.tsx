import { loginUser } from "../helpers/auth";
import { Small, Button } from "./index";
import { Title } from "./Title";
import { useField } from "../hooks/useField";
import authStore from "../store/auth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  // Set user global store
  const setUser = authStore((state) => state.setUser);

  // Redirect
  const navigate = useNavigate();

  // On change input state User and password
  const { value, onChange } = useField({
    email: "",
    password: "",
  });

  return (
    <div>
      {/* Title */}
      <Title title="Inicia sesion" parraph="Con tu cuenta de Codery" />
      <input
        type="email"
        placeholder="Ingresa tu correo"
        name="email"
        onChange={(e) => onChange(e.target)}
      />
      <input
        type="password"
        name="password"
        placeholder="Ingresa tu password"
        onChange={(e) => onChange(e.target)}
      />
      <Button
        buttonText="Iniciar sesion"
        redirectAction={() => navigate("/dashboard")}
        StateAction={setUser}
        onClick={() => loginUser(value.email, value.password)}
      />
      <Small
        withLink
        text="¿No tienes cuenta?"
        routerLink="/register"
        textLink="Registrate"
      />
    </div>
  );
};
