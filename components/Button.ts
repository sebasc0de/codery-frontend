import styled, { CSSProperties } from "styled-components";

export const Button = styled.button<CSSProperties>`
  font-size: 0.8rem;
  letter-spacing: 0.065rem;
  text-align: center;
  border: none;
  height: 2.5rem;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  border-radius: 2px;
  cursor: pointer;
  color: white;
  background: #eb5e28;
`;
