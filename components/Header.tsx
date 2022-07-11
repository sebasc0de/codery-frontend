import { BackArrow, Bell, User } from "../icons/index";

export const Header = () => {
  return (
    <header>
      <BackArrow />
      <div className="flex gap-4">
        <User />
        <Bell />
      </div>
    </header>
  );
};
