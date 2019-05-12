import * as React from "react";

import { AuthorInfo } from "components/AuthorInfo";
import CloseButton from "components/ButtonComponent/CloseButton";

import "./index.scss";

interface ITerminalState {
  condition: "opened" | "closed";
}

export class Terminal extends React.Component<{}, ITerminalState> {
  constructor(p: {}) {
    super(p);
    this.state = {
      condition: "opened",
    };
  }

  public render() {
    const { condition } = this.state;

    return (
      <div className={`terminal is--${condition}`}>
        <div className="terminal__head">
          <div>
            <AuthorInfo />
          </div>
          <div>
            <CloseButton
              dimension={12}
              onClick={this.handleClose}
            />
          </div>
        </div>
        <div className="terminal__content">
          content
        </div>
        <div
          className="terminal__closed-icon"
        >
          <button
            onClick={this.handleOpen}
          />
        </div>
      </div>
    );
  }

  private handleClose = () => {
    this.setState({ condition: "closed" });
  }

  private handleOpen = () => {
    this.setState({ condition: "opened" });
  }
}
