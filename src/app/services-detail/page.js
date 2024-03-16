import React from "react";

// Components
import PageHeader from "../../../components/pageheader/PageHeader";

// Styles
import styles from "./page.module.css";


const page = () => {
  return (
    <>
      <PageHeader title="Services Detail" text="Services Detail" />
      <section className={styles.service_detail}>
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
    </>
  );
};

export default page;
