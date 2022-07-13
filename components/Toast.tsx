import { Toast as ToastProps } from "../interfaces/index";
interface Props extends ToastProps {
  onClose?: () => void;
}

export const Toast = (toast: Props) => {
  return (
    <div onClick={toast.onClose} className="success fadeIn">
      <h5>{toast.title}</h5>
      <p>{toast.msg}</p>
    </div>
  );
};
