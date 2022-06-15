import styled from "styled-components";

interface Props {
  isActive?: boolean;
  background?: string;
}

export const Overlay = styled.div<Props>`
  background: ${(props) => props.background || "black"};
  opacity: 0.1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
