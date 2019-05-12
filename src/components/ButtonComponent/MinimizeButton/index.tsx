import React, { Component } from "react";

import ButtonBar from "components/ButtonComponent/ButtonBar";
import ButtonLayout from "components/ButtonComponent/ButtonLayout";

interface IMinimizeButtonProps {
  onClick: () => void;
  dimension: number;
}

export default class MinimizeButton extends Component<IMinimizeButtonProps, {}> {
  public render() {
    const { onClick, dimension } = this.props;
    return (
      <ButtonLayout
        onClick={onClick}
        dimension={dimension}
      >
        <ButtonBar dimension={dimension} />
      </ButtonLayout>
    );
  }
}
