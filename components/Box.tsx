import { ChildrenProps } from "../interfaces/ChildrenProps";

export const Box = ({ children }: ChildrenProps) => {
  return (
    <div className="relative flex flex-col items-center justify-start lg:w-1/4 w-11/12 rounded-lg lg:p-4 p-4 shadow-sm shadow-black/20 border border-gray-500/20">
      {children}
    </div>
  );
};
