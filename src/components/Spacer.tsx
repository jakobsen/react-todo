// This component is taken from https://www.joshwcomeau.com/react/modern-spacer-gif/

import styled from "styled-components";

interface IProps {
  axis?: string;
  size: number;
}

function getHeight({ axis, size }: IProps) {
  return axis == "horizontal" ? 1 : size;
}

function getWidth({ axis, size }: IProps) {
  return axis == "vertical" ? 1 : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight};
`;

export default Spacer;
