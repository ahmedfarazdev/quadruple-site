import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./blogs.module.css";

const BlogCard = ({ href, ...props }) => {
  return (
    <Fragment>
      <div className="blog-content">
        <Image src={props.img} width={320} height={180} alt="" />
        <div className="blog-meta">
          <span className="blog-tags">{props.tag}</span>
          <p className="blog-date">{props.date}</p>
          <Link href={href} className="blog-title">
            {props.title}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogCard;
