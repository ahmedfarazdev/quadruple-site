import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "../blog-detail.module.css";

// Assets
import postsOne from "../../../../public/images/slider-img1.png";

const PopularPosts = () => {
  return (
    <Fragment>
      <div className={styles.blogPosts}>
        <h6 className={styles.blogPostsHeading}>Popular Posts</h6>
        <div className={styles.postsList}>
          <div className={styles.postsMeta}>
            <Image src={postsOne} width={100} height={100} alt="" />
            <div className={styles.postsContent}>
              <h6 className={styles.postsTitle}>Exploring Generative AI in Content Creation</h6>
              <span>Technology - jan 1, 2024</span>
            </div>
          </div>
          <div className={styles.postsMeta}>
            <Image src={postsOne} width={100} height={100} alt="" />
            <div className={styles.postsContent}>
              <h6 className={styles.postsTitle}>Exploring Generative AI in Content Creation</h6>
              <span>Technology - jan 1, 2024</span>
            </div>
          </div>
          <div className={styles.postsMeta}>
            <Image src={postsOne} width={100} height={100} alt="" />
            <div className={styles.postsContent}>
              <h6 className={styles.postsTitle}>Exploring Generative AI in Content Creation</h6>
              <span>Technology - jan 1, 2024</span>
            </div>
          </div>
          <div className={styles.postsMeta}>
            <Image src={postsOne} width={100} height={100} alt="" />
            <div className={styles.postsContent}>
              <h6 className={styles.postsTitle}>Exploring Generative AI in Content Creation</h6>
              <span>Technology - jan 1, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopularPosts;
