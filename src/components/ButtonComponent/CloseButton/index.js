import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import ButtonLayout from "components/ButtonComponent/ButtonLayout";
import ButtonBar from "components/ButtonComponent/ButtonBar";

const CloseButtonBar = styled(ButtonBar)`
  transform: ${(props) => { return props.topPosition ? "rotate(45deg)" : "rotate(-45deg)"; }};
`;

export default class CloseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    dimension: PropTypes.number,
  }

  static defaultProps = {
    dimension: 10,
  }

  render() {
    const { onClick, dimension } = this.props;
    return (
      <ButtonLayout
        onClick={onClick}
        dimension={dimension}
      >
        <CloseButtonBar
          dimension={dimension}
          topPosition
        />
        <CloseButtonBar
          dimension={dimension}
        />
      </ButtonLayout>
    );
  }
}
