import React from "react";
import PropTypes from "prop-types";

export default class TerminalAuthorInfo extends React.Component {
  static propTypes = {
    siteAuthor: PropTypes.string.isRequired,
    onActiveTerminal: PropTypes.bool,
  }

  static defaultProps = {
    onActiveTerminal: false,
  }

  render() {
    const { siteAuthor, onActiveTerminal } = this.props;

    return (
      <span
        style={{ color: `${onActiveTerminal ? "#b0e577" : "inherit"}` }}
      >
        {`${siteAuthor}@${siteAuthor}PC${onActiveTerminal ? ":~$ " : ""}`}
      </span>
    );
  }
}
