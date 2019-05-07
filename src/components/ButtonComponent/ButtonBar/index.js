import styled from "@emotion/styled";

const ButtonBar = styled.div`
  background-color: #000000;
  width: ${props => `${props.dimension}px`};
  height: 2px;
  position: absolute;
  top: 50%;
`;

export default ButtonBar;
