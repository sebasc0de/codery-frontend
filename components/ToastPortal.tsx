import { useState } from "react";
import { createPortal } from "react-dom";
import { useDOM } from "../hooks/index";
import { Toast } from "./index";

export const ToastPortal = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { loaded, portalId } = useDOM();
  return loaded ? (
    createPortal(
      <div>
        {toasts.map((item) => (
          <Toast key={item.id} {...item} />
        ))}
      </div>,
      document.getElementById(portalId) as any
    )
  ) : (
    <></>
  );
};
