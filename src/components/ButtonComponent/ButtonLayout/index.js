import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.less";

export default class ButtonLayout extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    dimension: PropTypes.number,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    dimension: 10,
  }

  render() {
    const {
      onClick,
      dimension,
      children,
    } = this.props;
    return (
      <button
        type="button"
        className="button-layout"
        onClick={onClick}
        style={{ width: dimension }}
      >
        {children}
      </button>
    );
  }
}
