import { ChildrenProps } from "../interfaces/ChildrenProps";

export const Wrapper = ({ children }: ChildrenProps) => {
  return <div className="wrapper">{children}</div>;
};
