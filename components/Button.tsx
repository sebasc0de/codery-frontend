import { useState } from "react";

export const Button = ({
  buttonText,
  onClick,
  StateAction,
  redirectAction,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const actionHandler = () => {
    setLoading(true);
    onClick().then((response) => {
      StateAction && StateAction(response);
      redirectAction && redirectAction();
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
}
