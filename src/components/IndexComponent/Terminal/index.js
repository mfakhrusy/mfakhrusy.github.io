import React from "react";
import PropTypes from "prop-types";

import CloseButton from "components/ButtonComponent/CloseButton";
import MinimizeButton from "components/ButtonComponent/MinimizeButton";
import TerminalAutoTyping from "components/IndexComponent/TerminalAutoTyping";
import TerminalAuthorInfo from "components/IndexComponent/TerminalAuthorInfo";

import "./index.less";

class Terminal extends React.Component {
  render() {
    const { siteAuthor } = this.props;

    return (
      <div className="terminal">
        <div className="terminal-head">
          <TerminalAuthorInfo siteAuthor={siteAuthor} />
          <span><MinimizeButton /></span>
          <span><CloseButton /></span>
        </div>
        <div className="terminal-content">
          <TerminalAutoTyping siteAuthor={siteAuthor} />
        </div>
      </div>
    );
  }
}

Terminal.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
};

export default Terminal;
