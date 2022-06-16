import { Small } from "./Small";
import { startSession } from "../helpers/startSession";
import { Title } from "./Title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../store/user";

export const RegisterForm = () => {
  //React router dom navigation
  const navigate = useNavigate();

  //Global state managmente
  const { setUser, user } = userStore();

  // On change input state
  const [onChange, setOnChange] = useState("");

  // Login button handler
  const loginHandler = () => {
    startSession(onChange).then(setUser).catch();
  };

  //Effect for manage when user state change
  useEffect(() => {
    user.email.length > 3 && navigate("/create");
  }, [user]);

  return (
    <div>
      {/* Title */}
      <Title title="¡Toma el control!" parraph="Hasta que llegue el delivery" />
      <input
        placeholder="Tu apodo (Opcional)"
        value={onChange}
        onChange={(e) => setOnChange(e.target.value)}
      />
      <input
        placeholder="Correo electronico..."
        value={onChange}
        onChange={(e) => setOnChange(e.target.value)}
      />
      <input
        placeholder="Nueva contraseña..."
        value={onChange}
        onChange={(e) => setOnChange(e.target.value)}
      />
      <button onClick={loginHandler}>Crear mi cuenta</button>
      <Small text="Ingresa tus datos para continuar" />
    </div>
  );
};
