export interface Toast {
  id: string;
  title: string;
  msg: string;
}

export const Toast = (toast: Toast) => {
  return (
    <div>
      <h5>{toast.title}</h5>
      <p>{toast.msg}</p>
    </div>
  );
};
