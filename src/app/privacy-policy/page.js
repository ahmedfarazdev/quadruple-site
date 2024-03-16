import React, { Fragment } from "react";

import styles from "./page.module.css";
import PageHeader from "../../../components/pageheader/PageHeader";

const page = () => {
  return (
    <Fragment>
      <PageHeader title="Privacy Policy" text="Privacy Policy" />
      <section className={styles.privacy_policy}>
        <div className="container">
          <div className={styles.content_meta}>
            <h4>Lorem Ipsum</h4>
            <p>
              The Securitynet.ai ecosystem is powered by the SecNet Token (SNT),
              an ERC-20 compatible token built on the Ethereum blockchain. The
              SecNet Token plays a pivotal role in facilitating access to our
              AI-powered security services and governing the platform&apos;s
              operations. Here&apos;s an overview of the tokenomics structure:
            </p>
            <h4>Lorem Ipsum</h4>
            <ul className={styles.list}>
              <li>Initial Token Allocation: 1.5 billion SNT to kens.</li>
              <li>Initial Token Allocation: 1.5 billion SNT to kens.</li>
              <li>Initial Token Allocation: 1.5 billion SNT to kens.</li>
            </ul>
            <h4>Lorem Ipsum</h4>
            <p>
              The Securitynet.ai ecosystem is powered by the SecNet Token (SNT),
              an ERC-20 compatible token built on the Ethereum blockchain. The
              SecNet Token plays a pivotal role in facilitating access to our
              AI-powered security services and governing the platform&apos;s
              operations. Here&apos;s an overview of the tokenomics structure:
            </p>
            <h4>Lorem Ipsum</h4>
            <ul className={styles.list}>
              <li>Initial Token Allocation: 1.5 billion SNT to kens.</li>
              <li>Initial Token Allocation: 1.5 billion SNT to kens.</li>
              <li>Initial Token Allocation: 1.5 billion SNT to kens.</li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default page;
