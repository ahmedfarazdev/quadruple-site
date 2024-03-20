import React, { Fragment } from "react";
import PageHeader from "../../../components/pageheader/PageHeader";
import ServicesDetail from "./components/ServicesDetail";
import Services from "./components/Services";

const page = () => {
  return (
    <Fragment>
      <PageHeader title="Quadruple Services" text="Quadruple Services" />
      <ServicesDetail />
      <Services />
    </Fragment>
  );
};

export default page;
