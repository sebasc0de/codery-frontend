import { ReactElement, useState } from "react";
export const Layout = ({ children }: Props) => {
  const [state, setState] = useState(false);

  return (
    <div>
      <div className="w-36 z-10 fixed bottom-0 left-0">
        <button className="" onClick={() => setState(!state)}>
          Activar
        </button>
      </div>
      {state && (
        <div className="bg-black/10 fixed top-0 left-0 w-screen h-screen"></div>
      )}
      {children}
    </div>
  );
};

interface Props {
  children: ReactElement | ReactElement[];
}
