"use client"
import React from "react";
import styles from "./projects.module.css"
import Link from 'next/link';
import Image from "next/image";
import openImage from "../../public/images/openproject-img.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../utils/icons";


export default function Projects() {
    function NextArrow1(props) {
        const { style, onClick } = props;
        return (
            <div
                className="next-arrow slick-arrow"
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <NextArrow />
            </div>
        );
    }
    function PrevArrow1(props) {
        const { style, onClick } = props;
        return (
            <div
                className="prev-arrow slick-arrow"
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <PrevArrow />
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
    };

    return (
        <div className={styles.background}>
            <div>
                <h1 className={styles.projects}>Our Projects</h1>
                <h6 className={styles.textb}>Tasks That We Have Accomplished</h6>
            </div>

            <Slider {...settings} className="project-slider">
                <div>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h3 className={styles.text1}>Lorem ipsum dolor sit ame esse cillum</h3>
                            <h5 className={styles.text2}>Sed ut perspiciatis unde r</h5>
                            <h6 className={styles.text3}>Sed ut perspiciatis unde omnis iste natus error</h6>
                            <Link href="" className={styles.link}>Sed ut perspiciatis </Link>
                        </div>
                        <div className={styles.proimg}>
                            <Image className={styles.image}
                                src={openImage}
                                width={540}
                                height={399}
                                alt="project image" />
                                 <div className={styles.box}>
                            <h1 className={styles.boxh}>lorem ipsum</h1>
                            <Link href="" className={styles.boxl}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Link>
                            <p className={styles.boxin}>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p className={styles.boxin}>Ut enim ad minimfficia deserunt mollit anim id est laborum</p>
                        </div>
                        </div>
                       

                    </div>
                </div>
                <div>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h3 className={styles.text1}>Lorem ipsum dolor sit ame esse cillum</h3>
                            <h5 className={styles.text2}>Sed ut perspiciatis unde r</h5>
                            <h6 className={styles.text3}>Sed ut perspiciatis unde omnis iste natus error</h6>
                            <Link href="" className={styles.link}>Sed ut perspiciatis </Link>
                        </div>
                        <div className={styles.proimg}>
                            <Image className={styles.image}
                                src={openImage}
                                width={540}
                                height={399}
                                alt="project image" />
                                <div className={styles.box}>
                            <h1 className={styles.boxh}>lorem ipsum</h1>
                            <Link href="" className={styles.boxl}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Link>
                            <p className={styles.boxin}>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p className={styles.boxin}>Ut enim ad minimfficia deserunt mollit anim id est laborum</p>
                        </div>
                        </div>
                        

                    </div>
                </div>
                <div>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h3 className={styles.text1}>Lorem ipsum dolor sit ame esse cillum</h3>
                            <h5 className={styles.text2}>Sed ut perspiciatis unde r</h5>
                            <h6 className={styles.text3}>Sed ut perspiciatis unde omnis iste natus error</h6>
                            <Link href="" className={styles.link}>Sed ut perspiciatis </Link>
                        </div>
                        <div className={styles.proimg}>
                            <Image className={styles.image}
                                src={openImage}
                                width={540}
                                height={399}
                                alt="project image" />
                            <div className={styles.box}>
                                <h1 className={styles.boxh}>lorem ipsum</h1>
                                <Link href="" className={styles.boxl}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Link>
                                <p className={styles.boxin}>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <p className={styles.boxin}>Ut enim ad minimfficia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>


                    </div>
                </div>
            </Slider>


        </div>
    )
}  