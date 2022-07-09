import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../store/auth";

export const Layout = ({ children }: Props) => {
  const navigate = useNavigate();

  const { token, ...rest } = authStore();

  console.log(rest);

  useEffect(() => {
    token ? navigate("/dashboard") : navigate("/login");
  }, [token]);

  return <div>{children}</div>;
};

interface Props {
  children: ReactElement | ReactElement[];
}
