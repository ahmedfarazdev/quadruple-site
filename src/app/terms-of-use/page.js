import React, { Fragment } from "react";

import PageHeader from "../../../components/pageheader/PageHeader";

import styles from "./page.module.css"


const page = () => {
  return (
    <Fragment>
      <PageHeader title="Terms & Conditions" text="Terms & Conditions" />
      <section className={styles.privacy_policy}>
        <div className="container">
          <div className={styles.content_meta}>
            <h4>Terms and Conditions</h4>
            <p>
            Welcome to Quadruple Solutions. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website, products, and services. By accessing or using our website or services, you agree to comply with these terms and conditions. If you do not agree with these terms, please do not access or use our website or services.
            </p>
            <h4>1. Acceptance of Terms</h4>
            <ul className={styles.list}>
              <li>1.1 By accessing or using our website or services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using our website and services.</li>
              <li>1.2 We may modify these Terms at any time without prior notice. Your continued use of our website and services after any modifications indicates your acceptance of the updated Terms.</li>
            </ul>
            <h4>2. Use of Website</h4>
            <ul className={styles.list}>
              <li>2.1 You may use our website for lawful purposes only. You agree not to use our website in any way that violates applicable laws or regulations.</li>
              <li>2.2 You may not use our website to transmit, distribute, or store any material that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.</li>
              <li>2.3 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            </ul>
            <h4>3. Intellectual Property</h4>
            <ul className={styles.list}>
              <li>3.1 All content on our website, including text, graphics, logos, images, and software, is the property of Quadruple Solutions or its licensors and is protected by copyright and other intellectual property laws.</li>
              <li>3.2 You may not reproduce, distribute, modify, or create derivative works of any content from our website without our prior written consent.</li>
            </ul>
            <h4>4. Disclaimer of Warranties</h4>
            <ul className={styles.list}>
              <li>4.1 Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties of any kind, express or implied.</li>
              <li>4.2 We do not warrant that our website or services will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
            </ul>
            <h4>5. Limitation of Liability</h4>
            <ul className={styles.list}>
              <li>5.1 To the fullest extent permitted by law, Quadruple Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services.</li>
              <li>5.2 In no event shall our total liability to you exceed the amount paid by you, if any, for accessing or using our website or services.</li>
            </ul>
            <h4>6. Changes to Terms</h4>
            <ul className={styles.list}>
              <li>6.1 We reserve the right to update or modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of our website or services after any such changes constitutes acceptance of the updated Terms.</li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default page;
