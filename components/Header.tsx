import { useNavigate } from "react-router-dom";
import { BackArrow } from "./BackArrow";
import { Bell } from "./Bell";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <BackArrow />
      <Bell />
    </header>
  );
};
