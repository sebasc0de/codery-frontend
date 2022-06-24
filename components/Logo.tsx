interface Props {
  small?: boolean;
}

export const Logo = ({ small = false }: Props) => {
  return (
    <div className="flex justify-center">
      <img src="./logo.png" className={small ? "logoSmall" : "logo"} />
    </div>
  );
};
