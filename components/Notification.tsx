import { useState } from "react";
import { createPortal } from "react-dom";

export const Notification = ({ msg, show }: Props) => {
  const [styles, setStyles] = useState("success fadeIn");

  return (
    <>
      {show &&
        createPortal(
          <div onClick={() => setStyles("success fadeOut")} className={styles}>
            {msg}
          </div>,
          document.querySelector("#portal") as any
        )}
    </>
  );
};

interface Props {
  msg: string;
  show: boolean;
  setShow: () => void;
}
