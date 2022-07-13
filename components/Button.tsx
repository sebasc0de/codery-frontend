import { useFetch } from "../hooks";

export const Button = ({
  buttonText,
  onClick,
  StateAction,
  redirectAction,
  showNotification,
}: Props) => {
  const { setResponse, errors, setLoading, loading } = useFetch();

  console.log("my errors", errors);

  const actionHandler = () => {
    setLoading(true);
    onClick().then((response) => {
      setResponse(response);
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
