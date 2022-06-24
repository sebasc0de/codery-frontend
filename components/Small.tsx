import { Link } from "react-router-dom";

export const Small = ({ routerLink = "", text, withLink, textLink }: Props) => {
  return (
    <div className="flex gap-2 mt-3 items-center justify-center">
      <small>{text}</small>
      {withLink && <Link to={routerLink}>{textLink}</Link>}
    </div>
  );
};

interface Props {
  text: string;
  withLink?: boolean;
  routerLink?: string;
  textLink?: string;
}
