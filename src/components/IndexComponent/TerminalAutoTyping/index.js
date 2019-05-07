import React from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import TerminalAuthorInfo from "components/IndexComponent/TerminalAuthorInfo";

const testString = [
  "My name is Muhamad Fakhrusy",
  "A software developer",
  "Linux Enthusiast",
  "And aspiring hacker",
];

const finishedString = [];

export default class TerminalAutoTyping extends React.Component {
  static propTypes = {
    siteAuthor: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      arrayPos: 0,
    };
  }

  componentDidMount() {
    this.typed = new Typed(this.autoTextRef, {
      strings: testString,
      typeSpeed: 100,
      backDelay: 500,
      fadeOut: true,
      fadeOutDelay: 0,
      onStringTyped: (arrayPosition) => {
        finishedString.push(testString[arrayPosition]);
        this.setState(() => ({ arrayPos: arrayPosition })); // hack invoke rerender HAHAHAH
      },
    });
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
        {finishedString.map(item => (
          <div key={item} style={{ lineHeight: "1.5" }}>
            <TerminalAuthorInfo onActiveTerminal siteAuthor={siteAuthor} />
            <span>{item}</span>
          </div>
        ))}
        <div style={{ lineHeight: "1.5" }}>
          <TerminalAuthorInfo onActiveTerminal siteAuthor={siteAuthor} />
          <span
            // eslint-disable-next-line no-return-assign
            ref={autoTextRef => this.autoTextRef = autoTextRef}
          />
        </div>
      </div>
    );
  }
}
