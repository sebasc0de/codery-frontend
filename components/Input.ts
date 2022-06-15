import styled, { CSSProperties } from "styled-components";

const colors = {
  accent: "#EB5E28",
  primary: "#252422",
  secondary: "#403D39",
  alternate: "#CCC5B9",
  soft: "#FFFCF2",
  dark: "#151514",
};

export const Input = styled.input<CSSProperties>`
  border: ${(props) => props.border || "1px solid rgba(0,0,0,0.1)"};
  border-radius: 4px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  &::placeholder {
    padding: 5px;
    color: ${(props) => `rgba(${props.color},0.30)`};
  }
  &:focus {
    outline: 2px solid #eb5e28;
  }
`;
