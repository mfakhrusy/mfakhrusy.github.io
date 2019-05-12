import * as React from "react";

import { Terminal } from "components/Terminal";

export class TerminalSection extends React.Component<{}, {}> {
  public render() {
    return (
      <section>
        <Terminal />
      </section>
    );
  }
}
