import { Error } from "./Error";
import { registerUser } from "../helpers/registerUser";
import { Small } from "./Small";
import { Title } from "./Title";
import { useField } from "../hooks/useField";
import authStore from "../store/auth";

export const RegisterForm = () => {
  const { setUser, msg } = authStore();

  // Manage email and password onChange handler
  const name = useField({ type: "text" });
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });

  // Login button handler
  const registerhandler = () => {
    registerUser(name.value, email.value, password.value).then(setUser);
  };

  return (
    <div>
      {msg && <Error msg={msg} />}
      {/* Title */}
      <Title title="¡Toma el control!" parraph="Hasta que llegue el delivery" />
      <input {...name} placeholder="Ingresa tu nombre" />
      <input {...email} placeholder="Ingresa tu correo electronico" />
      <input {...password} placeholder="Ingresa una contraseña" />
      <button onClick={registerhandler}>Crear mi cuenta</button>
      <Small
        withLink
        text="¿Ya tienes cuenta?"
        textLink="Inicia sesion"
        routerLink="/login"
      />
    </div>
  );
};
