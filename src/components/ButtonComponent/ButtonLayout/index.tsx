import React, { Component } from "react";

import "./index.scss";

interface IButtonLayoutProps {
  onClick: () => void;
  dimension: number;
  children: JSX.Element[] | JSX.Element;
}

export default class ButtonLayout extends Component<IButtonLayoutProps, {}> {
  public render() {
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
