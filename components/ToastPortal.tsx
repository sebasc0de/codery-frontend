import { createPortal } from "react-dom";
import { Toast } from "./index";
import { Toast as ToastProps } from "../interfaces/index";
import { useDOM } from "../hooks/index";
import { forwardRef, useImperativeHandle, useState } from "react";
import { uuid } from "../helpers/generateUUID";

export const ToastPortal = forwardRef(({}, ref) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const { loaded, portalId } = useDOM();

  // Remove toast handler
  const removeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  useImperativeHandle(ref, () => ({
    addMessage(toast: ToastProps) {
      setToasts([...toasts, { ...toast, id: uuid() }]);
    },
  }));

  return loaded ? (
    createPortal(
      <>
        {toasts.map((item) => (
          <Toast {...item} key={item.id} onClose={() => removeToast(item.id)} />
        ))}
      </>,
      document.getElementById(portalId) as any
    )
  ) : (
    <></>
  );
});
