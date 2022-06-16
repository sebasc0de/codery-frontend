interface Props {
  action?: () => void;
  text: string;
}

export const GradientButton = ({ action, text }: Props) => {
  return (
    <button onClick={action} className="gradientButton">
      {text}
    </button>
  );
};
