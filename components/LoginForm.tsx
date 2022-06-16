import { Small } from "./Small";
import { startSession } from "../helpers/startSession";
import { Title } from "./Title";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../store/user";
import { useField } from "../hooks/useField";

export const LoginForm = () => {
  //React router dom navigation
  const navigate = useNavigate();

  //Global state managmente
  const { setUser, user } = userStore();

  // On change input state User and password
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });

  // Login button handler
  const loginHandler = () => {
    startSession(email.value, password.value).then(setUser);
  };

  //Effect for manage when user state change
  useEffect(() => {
    user.email.length > 3 && navigate("/create");
  }, [user]);

  return (
    <div>
      {/* Title */}
      <Title title="Inicia sesion" parraph="Con tu cuenta de Codery" />
      <input {...email} placeholder="Correo electronico..." />
      <input {...password} placeholder="Contraseña..." />
      <button onClick={loginHandler}>Iniciar sesion</button>
      <Small
        withLink
        text="¿No tienes cuenta?"
        routerLink="/"
        textLink="Registrate"
      />
    </div>
  );
};
