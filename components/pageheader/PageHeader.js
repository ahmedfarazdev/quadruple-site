import React from "react";
import Link from "next/link";

import styles from "./pageheader.module.css";

const PageHeader = (props) => {
  return (
    <div className={styles.page_header}>
      <h2 className={styles.page_title}>{props.title}</h2>
      <div className={styles.page_content}>
        <Link href="/" className={styles.page_link}>
          Home
        </Link>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default PageHeader;
