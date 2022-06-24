export const Button = ({ loadingState, buttonText, onClick }: Props) => {
  return (
    <button className="flex justify-center items-center" onClick={onClick}>
      {loadingState ? <img className="w-5" src="./loader.gif" /> : buttonText}
    </button>
  );
};

interface Props {
  buttonText: string;
  loadingState?: boolean;
  onClick: () => void;
}
