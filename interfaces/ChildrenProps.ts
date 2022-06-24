import React, { ReactElement } from "react";

export interface ChildrenProps {
  children?: ReactElement<string> | ReactElement[];
  className?: string;
}
