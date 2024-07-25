import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import BlogCard from "./BlogCard";

// Styles
import styles from "./blogs.module.css";

// Assets
import blogImg1 from "../../public/images/slider-img1.png";
import blogImg2 from "../../public/images/slider-img2.jpg";
import blogImg3 from "../../public/images/slider-img3.jpg";
import blogImg4 from "../../public/images/slider-img4.jpg";

const Blogs = () => {
  return (
    <Fragment>
      <div className={styles.blogWrapper}>
        <div className="container">
          <h2 className="site-heading">Our Blogs</h2>
          <p className="site-text">Discover Our latest blog and news</p>
          <div className={styles.blogRow}>
            <BlogCard
              img={blogImg1}
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
              img={blogImg2}
              tag="web development"
              date="waqar hanif - jan 1, 2024"
              title="From Line of Duty to The Fall: Why Can’t TV Shows Stop Killing Women?"
              href="/blog-detail"
            />
            {/* <BlogCard
              img={blogImg4}
              tag="web development"
              date="waqar hanif - jan 1, 2024"
              title="From Line of Duty to The Fall: Why Can’t TV Shows Stop Killing Women?"
              href="/blog-detail"
            /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blogs;
