interface Props {
  size?: "w-40" | "w-20" | "w-10" | "w-5";
}

export const Logo = ({ size = "w-40" }: Props) => {
  return (
    <div className="flex justify-center">
      <img src="./logo.png" className={size} />
    </div>
  );
};
