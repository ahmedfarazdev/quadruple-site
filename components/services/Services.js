// Libraries
import React from "react";
import Link from "next/link";

// Components
import { BagIcon, HouseIcon, OneIcon, UserIcon } from "../../utils/icons";

// Styles
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className="site-heading">Services</h2>
        <p className="site-text">services we provide</p>
        <div className={styles.services_card}>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <BagIcon fill="white" width={30} height={28} />
            </div>
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <OneIcon fill="white" width={32} height={30} />
            </div>
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <HouseIcon fill="white" width={32} height={30} />
            </div>
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>lorem ipsum</h4>
            <p className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
