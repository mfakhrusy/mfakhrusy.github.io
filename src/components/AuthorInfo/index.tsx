import * as React from "react";

import { author } from "config/info";

import "./index.scss";

interface IAuthorInfoProps {
  active?: boolean;
}

export class AuthorInfo extends React.Component<IAuthorInfoProps, {}> {
  public render() {
    const { active } = this.props;
    return (
      <span>{`${author}@${author}PC${active ? "~:$ " : ""}`}</span>
    );
  }
}
