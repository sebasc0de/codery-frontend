import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../store/auth";

export const Layout = ({ children }: Props) => {
  const navgiate = useNavigate();

  const user = authStore((state) => state.user);

  useEffect(() => {
    user.email && navgiate("/dashboard");
  }, [user]);

  return <div>{children}</div>;
};

interface Props {
  children: ReactElement | ReactElement[];
}
