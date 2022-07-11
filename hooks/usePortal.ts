import { useState } from "react";

const usePortal = () => {
  const [show, setShow] = useState(false);

  const togglePortal = () => {
    setShow(!show);
  };

  const addPortal = () => {
    setShow(true);
  };

  const hidePortal = () => {
    setShow(false);
  };

  return { togglePortal, addPortal, hidePortal, show };
};

export default usePortal;
