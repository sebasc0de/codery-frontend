import { BackArrow, Bell, Order, User } from "../icons/index";

export const Header = () => {
  return (
    <header>
      <BackArrow />
      <div className="flex gap-4">
        <User />
        <Order />
        <Bell />
      </div>
    </header>
  );
};
