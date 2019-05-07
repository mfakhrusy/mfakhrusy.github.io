import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import Terminal from "components/Terminal";

import "./index.less";

export default class MainSection extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteAuthorQuery {
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
