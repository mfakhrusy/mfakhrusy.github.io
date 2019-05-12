import styled from "@emotion/styled";

interface IButtonBarProps {
  dimension: number;
}

const ButtonBar = styled.div<IButtonBarProps>`
  background-color: #000000;
  width: ${(props) => `${props.dimension}px`};
  height: 2px;
  position: absolute;
  top: 50%;
`;

export default ButtonBar;
