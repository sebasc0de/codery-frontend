import { errors } from "../data/Errors";
import { useEffect, useState } from "react";

export const Error = ({ msg }: { msg: string }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    errors.includes(msg) ? setShow(true) : setShow(false);
  }, [msg]);

  return (
    <div
      onClick={() => setShow(false)}
      className="w-full fixed bottom-0 left-0 flex justify-center"
    >
      <small className={show ? "error fadeIn" : "error fadeOut"}>{msg}</small>
    </div>
  );
};
