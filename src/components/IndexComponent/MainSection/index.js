import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import Terminal from "components/IndexComponent/Terminal";

import "./index.less";

export default class MainSection extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                author
              }
            }
          }
        `}
        render={data => (
          <section className="main-section">
            <Terminal siteAuthor={data.site.siteMetadata.author} />
          </section>
        )}
      />
    );
  }
}
