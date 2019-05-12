import React, { Component } from "react";

import styled from "@emotion/styled";

import ButtonBar from "components/ButtonComponent/ButtonBar";
import ButtonLayout from "components/ButtonComponent/ButtonLayout";

interface ICloseButtonBarProps {
  topPosition: boolean;
}

const CloseButtonBar = styled(ButtonBar)<ICloseButtonBarProps>`
  transform: ${(props) => props.topPosition ? "rotate(45deg)" : "rotate(-45deg)"};
`;

interface ICloseButtonProps {
  onClick: () => void;
  dimension: number;
}

export default class CloseButton extends Component<ICloseButtonProps, {}> {
  public render() {
    const { onClick, dimension } = this.props;
    return (
      <ButtonLayout
        onClick={onClick}
        dimension={dimension}
      >
        <CloseButtonBar
          dimension={dimension}
          topPosition={true}
        />
        <CloseButtonBar
          dimension={dimension}
          topPosition={false}
        />
      </ButtonLayout>
    );
  }
}
