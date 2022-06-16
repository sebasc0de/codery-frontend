export const Title = ({ title, preTitle, parraph, space = "mb-3" }: Props) => {
  return (
    <div className={space}>
      <h4>{preTitle}</h4>
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{parraph}</p>
    </div>
  );
};

interface Props {
  preTitle: string;
  title: string;
  parraph: string;
  space?: "mb-3" | "mt-3";
}
