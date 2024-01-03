"use client";

// Libraries
import React, { Fragment } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Components
import { OurProjectsData } from "../../data/OurProjectsData";
import { MoreProjectsData } from "../../data/MoreProjectsData";

// Styles
import styles from "./projects.module.css";

export default function OurProjects() {
  var settings = {
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  var settings2 = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <section className={styles.our_projects}>
        <h2 className="site-heading">Our Projects</h2>
        <p className="site-text">tasks that we have accomplished</p>
        <div className="our-projects-slider">
          <Slider {...settings} className="projects-slider">
            {OurProjectsData &&
              OurProjectsData.map((data, index) => (
                <div key={index}>
                  <div className={styles.slider_meta}>
                    <Image
                      src={data.img}
                      alt="project img"
                      width={800}
                      height={550}
                      className={styles.project_img}
                    />
                    <div className="our-project-content">
                      <span className={styles.project_id}>{data.id}</span>
                      <h3 className={styles.project_title}>{data.title}</h3>
                      <p className={styles.project_detail}>{data.text}</p>
                      <Link href="#" className={styles.project_link}>
                        {data.link}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
      <section className={styles.more_projects}>
        <div className="container">
          <h3 className="site-sub-heading">More Projects</h3>
          <div className="more-projects-slider">
            <Slider {...settings2}>
              {MoreProjectsData &&
                MoreProjectsData.map((data, index) => (
                  <div key={index} className={styles.more_projects_meta}>
                    <div className={styles.more_project_img}>
                      <Image
                        src={data.img}
                        alt="project"
                        width={500}
                        height={350}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
