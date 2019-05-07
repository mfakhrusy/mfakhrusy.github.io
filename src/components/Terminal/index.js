import React from "react";
import PropTypes from "prop-types";

import "./index.less";

const Terminal = ({
  siteAuthor,
}) => {
  return (
    <div className="terminal">
      <div className="terminal-head">
        {`${siteAuthor}@${siteAuthor}PC`}
      </div>
      <div className="terminal-content">
        content
      </div>
    </div>
  );
};

Terminal.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
};

export default Terminal;
