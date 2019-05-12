import * as React from "react";

import { TerminalSection } from "./components/TerminalSection";

import "./index.scss";

export class Homepage extends React.Component<{}, {}> {
  public render() {
    return (
      <main>
        <TerminalSection />
      </main>
    );
  }
}
