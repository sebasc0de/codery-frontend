import styled, { CSSProperties } from "styled-components";

export const Box = styled.div<CSSProperties>`
  background: ${(props) => props.background || "white"};
  width: ${(props) => props.width || "25rem"};
  height: ${(props) => props.height || "15rem"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 3px 20px 20px rgba(0,0,0,0.015)"};
  border-radius: 5px;
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  padding: ${(props) => props.padding || ""};
  gap: ${(props) => props.gap || "1rem"};
`;
