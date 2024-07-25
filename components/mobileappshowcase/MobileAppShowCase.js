"use client";

import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Styles
import styles from "./mobileapp.module.css";

// Assets
import screenshot1 from "../../public/images/screenshot-1.png";
import screenshot2 from "../../public/images/screenshot-2.png";
import screenshot3 from "../../public/images/screenshot-3.png";
import screenshot4 from "../../public/images/screenshot-4.png";
import screenshot5 from "../../public/images/screenshot-5.png";
import Link from "next/link";

export default function MobileAppShowCase() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          centerPadding: "100px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: "80px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "80px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className={styles.showcase}>
        <div className="container">
          <h2 className="site-heading">Our Top Apps</h2>
          <p className="site-text">Quadruple App screen show</p>
          <div className="slider-container">
            <Slider {...settings}>
              <div style={{ height: "100%" }}>
                <Link href="#" style={{ display: "block" }}>
                  <Image
                    src={screenshot1}
                    width={400}
                    height={450}
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ height: "100%" }}>
                <Link href="#" style={{ display: "block" }}>
                  <Image
                    src={screenshot2}
                    width={400}
                    height={450}
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ height: "100%" }}>
                <Link href="#" style={{ display: "block" }}>
                  <Image
                    src={screenshot3}
                    width={400}
                    height={450}
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ height: "100%" }}>
                <Link href="#" style={{ display: "block" }}>
                  <Image
                    src={screenshot4}
                    width={400}
                    height={450}
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ height: "100%" }}>
                <Link href="#" style={{ display: "block" }}>
                  <Image
                    src={screenshot5}
                    width={400}
                    height={450}
                    alt=""
                  />
                </Link>
              </div>
              <div style={{ height: "100%" }}>
                <Link href="#" style={{ display: "block" }}>
                  <Image
                    src={screenshot1}
                    width={400}
                    height={450}
                    alt=""
                  />
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
