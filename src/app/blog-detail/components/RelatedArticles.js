import React, { Fragment } from "react";

// Components
import BlogCard from "../../../../components/blogs/BlogCard";

// Assets
import blogImg1 from "../../../../public/images/slider-img1.png";
import blogImg2 from "../../../../public/images/slider-img2.jpg";
import blogImg3 from "../../../../public/images/slider-img3.jpg";

// Styles
import styles from "../blog-detail.module.css";

const RelatedArticles = () => {
  return (
    <Fragment>
      <div className={styles.relatedArticles}>
        <div className="container">
          <h3>Related Articles</h3>
          <div className={styles.articlesContainer}>
            <BlogCard
              img={blogImg2}
              tag="web development"
              date="waqar hanif - jan 1, 2024"
              title="From Line of Duty to The Fall: Why Can’t TV Shows Stop Killing Women?"
              href="/blog-detail"
            />
            <BlogCard
              img={blogImg3}
              tag="web development"
              date="waqar hanif - jan 1, 2024"
              title="From Line of Duty to The Fall: Why Can’t TV Shows Stop Killing Women?"
              href="/blog-detail"
            />
            <BlogCard
              img={blogImg1}
              tag="web development"
              date="waqar hanif - jan 1, 2024"
              title="From Line of Duty to The Fall: Why Can’t TV Shows Stop Killing Women?"
              href="/blog-detail"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RelatedArticles;
