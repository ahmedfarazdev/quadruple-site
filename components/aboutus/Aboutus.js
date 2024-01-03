// Libraries
import React from "react";
import Link from "next/link";

// Components
import {
  PenIcon,
  SecurityIcon,
  GraphIcon,
  UserIcon,
  HatIcon,
  LocationIcon,
} from "../../utils/icons";

// Styles
import styles from "./aboutus.module.css";

export default function Aboutus() {
  return (
    <section className={styles.about_us}>
      <div className="container">
        <h2 className="site-heading">About Us</h2>
        <p className="site-text">All You Need To Know About Us</p>
        <div className={styles.about_card}>
          <div className={styles.single_card}>
            <PenIcon
              fill="#2C2929"
              width={29}
              height={44}
              className={styles.card_icon}
            />
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <SecurityIcon
              fill="#2C2929"
              width={32}
              height={44}
              className={styles.card_icon}
            />
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              accusantium dolor
            </Link>
          </div>
          <div className={styles.single_card}>
            <GraphIcon
              fill="#2C2929"
              width={48}
              height={44}
              className={styles.card_icon}
            />
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              accusantium dolor
            </Link>
          </div>
          <div className={styles.single_card}>
            <UserIcon
              fill="#2C2929"
              width={40}
              height={44}
              className={styles.card_icon}
            />
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              accusantium dolor
            </Link>
          </div>
          <div className={styles.single_card}>
            <HatIcon
              fill="#2C2929"
              width={77}
              height={44}
              className={styles.card_icon}
            />
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              accusantium dolor
            </Link>
          </div>
          <div className={styles.single_card}>
            <LocationIcon
              fill="#2C2929"
              width={30}
              height={44}
              className={styles.card_icon}
            />
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              accusantium dolor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
