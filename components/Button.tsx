import { useState } from "react";

export const Button = ({
  buttonText,
  onClick,
  StateAction,
  redirectAction,
  showNotification,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const actionHandler = () => {
    setLoading(true);
    onClick().then((response) => {
      // Define global state
      StateAction && StateAction(response);
      // Redirect after server response
      redirectAction && redirectAction();
      // Show notitification after server response
      showNotification && showNotification();
      //Set loader to false
      setLoading(false);
    });
  };

  return (
    <button
      className="flex justify-center items-center"
      onClick={actionHandler}
    >
      {loading ? <img className="w-5" src="./loader.gif" /> : buttonText}
    </button>
  );
};

interface Props {
  buttonText: string;
  onClick: () => Promise<any>;
  StateAction?: (args: any) => void;
  redirectAction?: () => void;
  showNotification?: () => void;
}
