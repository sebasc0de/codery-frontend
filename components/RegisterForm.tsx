import { useField } from "../hooks/useField";
import { Small } from "./Small";
import { Title } from "./Title";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../store/user";

export const RegisterForm = () => {
  //React router dom navigation
  const navigate = useNavigate();

  //Global state managmente
  const { setUser, user } = userStore();

  // Manage email and password onChange handler
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });

  // Login button handler
  const loginHandler = () => {
    alert("Falta el fetch");
  };

  //Effect for manage when user state change
  useEffect(() => {
    user.email.length > 3 && navigate("/create");
  }, [user]);

  return (
    <div>
      {/* Title */}
      <Title title="¡Toma el control!" parraph="Hasta que llegue el delivery" />
      <input {...email} placeholder="Correo electronico..." />
      <input {...password} placeholder="Nueva contraseña..." />
      <button onClick={loginHandler}>Crear mi cuenta</button>
      <Small text="Ingresa tus datos para continuar" />
    </div>
  );
};
