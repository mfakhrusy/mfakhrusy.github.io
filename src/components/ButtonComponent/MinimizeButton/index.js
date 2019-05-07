import React, { Component } from "react";
import PropTypes from "prop-types";

import ButtonLayout from "components/ButtonComponent/ButtonLayout";
import ButtonBar from "components/ButtonComponent/ButtonBar";

export default class MinimizeButton extends Component {
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
        <ButtonBar dimension={dimension} />
      </ButtonLayout>
    );
  }
}
