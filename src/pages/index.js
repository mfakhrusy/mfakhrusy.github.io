import React from "react";

import SEO from "components/seo";
import MainSection from "components/IndexComponent/MainSection";

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={["mfakhrusy", "blog", "developer", "react"]} />
    <MainSection />
  </div>
);

export default IndexPage;
