import { ChildrenProps } from "../interfaces/ChildrenProps";

export const Box = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col items-center justify-start gap-2 lg:h-1/3 lg:w-1/4 h-1/3 w-11/12 rounded-lg lg:p-4 p-2">
      {children}
    </div>
  );
};
