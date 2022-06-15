import userStore from "../store/user";
import { ReactElement, useEffect, useState } from "react";
import { FloatButton, Overlay, Wrapper } from "../components/index";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  const { user } = userStore();

  useEffect(() => {
    user.email === "" ? navigate("/start") : navigate("/create");
  }, [user]);

  const [state, setState] = useState(false);

  return (
    <Wrapper>
      <FloatButton onClick={() => setState(!state)}>Activar</FloatButton>
      {state && <Overlay />}
      {children}
    </Wrapper>
  );
};

interface Props {
  children: ReactElement | ReactElement[];
}
