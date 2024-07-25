import React, { Fragment } from "react";

// Components
import BlogDetail from "./components/BlogDetail";
import PageHeader from "../../../components/pageheader/PageHeader";
import RelatedArticles from "./components/RelatedArticles";

const page = () => {
  return (
    <Fragment>
      <PageHeader title="Blog Detail" text="Blog & News" />
      <BlogDetail />
      <RelatedArticles />
    </Fragment>
  );
};

export default page;
