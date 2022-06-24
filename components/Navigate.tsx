import React from "react";
import { Link } from "react-router-dom";

export const Navigate = ({ text, url }: Props) => {
  return (
    <Link to={url}>
      <button className="mt-5">{text}</button>
    </Link>
  );
};

interface Props {
  text: string;
  url: string;
}
