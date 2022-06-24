import { ChildrenProps } from "../interfaces/ChildrenProps";

export const Wrapper = ({ children, className }: ChildrenProps) => {
  return <section className={`${className}`}>{children}</section>;
};
