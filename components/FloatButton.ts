import styled from "styled-components";

interface Props {
  margin?: string;
  bottom?: string;
  height?: string;
  left?: string;
  padding?: string;
  background?: string;
}

export const FloatButton = styled.button<Props>`
  font-size: 0.8rem;
  text-align: center;
  border: none;
  z-index: 10;
  border-radius: 2px;
  cursor: pointer;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 5px;
  height: ${(props) => props.height || "2.5rem"};
  padding: ${(props) => props.padding || "5px 10px"};
  background-color: #eb5e28;
`;
