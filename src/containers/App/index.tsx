import * as React from "react";

import { Homepage } from "containers/Homepage";

import "./index.scss";

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Homepage />
      </React.Fragment>
    );
  }
}
