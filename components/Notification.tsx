import { useEffect, useState } from "react";

export const Notification = ({ msg }: { msg: string }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return <div className={`success ${show ? "fadeIn" : "fadeOut"}`}>{msg}</div>;
};
