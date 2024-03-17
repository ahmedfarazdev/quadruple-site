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
            
            <p>
            At Quadruple Solutions, we are committed to protecting the privacy and security of our clients' and visitors' personal information. This Privacy Policy outlines how we collect, use, disclose, and protect information gathered through our website and our services.
            </p>
            <h4>Information We Collect</h4>
            <p>We may collect personal information when you interact with us, including but not limited to:</p>
            <ul className={styles.list}>
              <li>Name, email address, phone number, and other contact details provided when you communicate with us or sign up for our services.</li>
              <li>Information about how you interact with our website, including your IP address, browser type, pages visited, and other usage statistics collected through cookies and similar technologies.</li>
              <li>Information provided by clients for the purpose of delivering our services, such as project requirements, specifications, and other relevant data.</li>
            </ul>
            <h4>How We Use Your Information</h4>
            <p>
            We may use the information we collect for the following purposes:
            </p>
            <ul className={styles.list}>
              <li>To provide and improve our services, including personalized experiences and customer support.</li>
              <li>To communicate with you about our services, promotions, and updates.</li>
              <li>To analyze usage trends and optimize the performance of our website and services.</li>
              <li>To comply with legal obligations and enforce our terms of service.</li>
            </ul>
            <h4>Information Sharing and Disclosur</h4>
            <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:</p>
            <ul className={styles.list}>
              <li>With service providers and business partners who assist us in delivering our services.</li>
              <li>With your consent or at your direction, such as when you authorize the sharing of information with third-party integrations.</li>
              <li>When required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</li>
            </ul>
            <h4>Data Security</h4>
            <p>We implement appropriate technical and organizational measures to protect the confidentiality, integrity, and availability of your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            <h4>Changes to this Privacy Policy</h4>
            <p>We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of our website or services after any such changes constitutes acceptance of the updated Privacy Policy.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default page;
