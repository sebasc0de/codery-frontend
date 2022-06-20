import { loginUser } from "../helpers/loginUser";
import { Small, Button, Error } from "./index";
import { Title } from "./Title";
import { useField } from "../hooks/useField";
import { useState } from "react";
import userStore from "../store/user";

export const LoginForm = () => {
  // Loading state
  const [loading, setLoading] = useState(false);

  // Set user global store
  const { setUser, msg } = userStore();

  // On change input state User and password
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });

  // Login button handler
  const loginHandler = () => {
    setLoading(true);
    loginUser(email.value, password.value, setLoading).then(setUser);
  };

  return (
    <div>
      <Error msg={msg} />
      {/* Title */}
      <Title title="Inicia sesion" parraph="Con tu cuenta de Codery" />
      <input {...email} placeholder="Correo electronico..." />
      <input {...password} placeholder="Contraseña..." />
      <Button
        buttonText="Iniciar sesion"
        loadingState={loading}
        onClick={loginHandler}
      />
      <Small
        withLink
        text="¿No tienes cuenta?"
        routerLink="/"
        textLink="Registrate"
      />
    </div>
  );
};
