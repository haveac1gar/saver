import { styled } from "styled-components";

type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

export const Spacer = styled.div<SpacerProps>`
  ${props => props.horizontal ? `
    width: ${props.size}px;
  ` : `
    height: ${props.size}px;
  `}
`;
