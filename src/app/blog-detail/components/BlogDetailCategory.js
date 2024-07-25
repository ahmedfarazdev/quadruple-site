import React, { Fragment } from "react";
import Link from "next/link";

// Styles
import styles from "../blog-detail.module.css";

const BlogDetailCategory = () => {
  return (
    <Fragment>
      <div className={styles.blogCategory}>
        <h6>Categories</h6>
        <ul className={styles.categoryList}>
          <li>
            <Link href="#">
              <p>Technologies</p>
              <small>10</small>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p>Leadership</p>
              <small>12</small>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p>Development</p>
              <small>12</small>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p>Technologies</p>
              <small>10</small>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p>Leadership</p>
              <small>12</small>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p>Development</p>
              <small>12</small>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BlogDetailCategory;
