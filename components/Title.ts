import styled, { CSSProperties } from "styled-components";

export const Title = styled.h2<CSSProperties>`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: ${(props) => props.fontWeight || "600"};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  text-align: ${(props) => props.textAlign || "center"};
`;
