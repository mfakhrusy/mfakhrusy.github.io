import * as React from "react";

import { author } from "config/info";

import "./index.scss";

export class AuthorInfo extends React.Component<{}, {}> {
  public render() {
    return (
      <span>{`${author}@${author}PC`}</span>
    );
  }
}
