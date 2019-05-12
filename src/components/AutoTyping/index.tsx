import * as React from "react";

import Typed from "typed.js";

import { AuthorInfo } from "components/AuthorInfo";

interface IAutoTypingProps {
  inputString: string[];
}

interface IAutoTypingState {
  processedString: string[];
}

export class AutoTyping extends React.Component<IAutoTypingProps, IAutoTypingState> {
  private typed: Typed | undefined;
  private autoTypingRef: React.RefObject<HTMLInputElement>;

  constructor(p: IAutoTypingProps) {
    super(p);

    this.state = {
      processedString: [],
    };

    this.autoTypingRef = React.createRef();
  }

  public componentDidMount() {
    const { inputString } = this.props;

    const options = {
      backDelay: 0,
      backSpeed: 0,
      fadeOut: true,
      fadeOutDelay: 0, // a but in index.d.ts, fadeOutDelay should be a number
      onStringTyped: (arrayPos: any) => {
        this.setState((prevState) => {
          const newArr = [...prevState.processedString, inputString[arrayPos]];

          return (
            { processedString: newArr }
          );
        });
      },
      strings: inputString,
      typeSpeed: 50,
    };

    this.typed = new Typed(this.autoTypingRef.current as any, options as any);
  }

  public render() {
    const { inputString } = this.props;
    const { processedString } = this.state;

    return (
      <div className="auto-typing">
        {processedString.length !== 0 ? (
          processedString.map((item, index) => (
            index < inputString.length - 1 &&
          <div key={index} style={{ paddingBottom: "4px" }}>
            <AuthorInfo active={true} />
            <span>{item}</span>
          </div>
          ))
        ) : null}
        <AuthorInfo active={true} />
        <span ref={this.autoTypingRef} />
      </div>
    );
  }
}
