import React from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import TerminalAuthorInfo from "components/IndexComponent/TerminalAuthorInfo";

const testString = [
  "test aku adalah anak gembnala",
  "Selalu riang dan gembira",
  "la lala lala lalala",
  "la lala lalalalalala",
];

export default class TerminalAutoTyping extends React.Component {
  static propTypes = {
    siteAuthor: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.typed = new Typed(this.autoTextRef, { strings: testString, typeSpeed: 50, backSpeed: 50 });
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    const { siteAuthor } = this.props;

    return (
      <div className="terminal-auto-typing">
        <TerminalAuthorInfo onActiveTerminal siteAuthor={siteAuthor} />
        <span
          // eslint-disable-next-line no-return-assign
          ref={autoTextRef => this.autoTextRef = autoTextRef}
        />
      </div>
    );
  }
}
