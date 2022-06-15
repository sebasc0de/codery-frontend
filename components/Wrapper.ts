import styled, { CSSProperties } from "styled-components";

export const Wrapper = styled.div<CSSProperties>`
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  background: ${(props) => props.background || "#fbfbfb"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;
