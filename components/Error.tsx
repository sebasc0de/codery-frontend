import { errors } from "../data/Errors";
import { useEffect, useState } from "react";

export const Error = ({ msg }: { msg: string }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    errors.includes(msg) ? setShow(true) : setShow(false);
  }, [msg]);

  return (
    <div className="w-full fixed top-0 left-0 flex justify-center">
      <small className={show ? "error" : "hidden"}>{msg}</small>
    </div>
  );
};
