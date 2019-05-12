import * as React from "react";

import { AuthorInfo } from "components/AuthorInfo";
import CloseButton from "components/ButtonComponent/CloseButton";

import { AutoTyping } from "components/AutoTyping";
import { terminalInfo } from "config/info";

import "./index.scss";

interface ITerminalState {
  condition: "opened" | "closed";
  templateString: string[];
}

export class Terminal extends React.Component<{}, ITerminalState> {
  constructor(p: {}) {
    super(p);
    this.state = {
      condition: "opened",
      templateString: terminalInfo,
    };
  }

  public render() {
    const { condition, templateString } = this.state;

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
          <AutoTyping inputString={templateString} />
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
