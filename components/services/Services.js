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
        <h2 className="site-heading">About Us</h2>
        <p className="site-text">Quadruple Solutions is a leading provider of innovative technology solutions, dedicated to empowering businesses across industries. With a commitment to excellence, we specialize in software development, IT consulting, project management, and bespoke technology solutions tailored to meet the unique needs of our clients. Our team of experts combines cutting-edge technology with industry insights to drive efficiency, streamline operations, and foster growth for our partners worldwide. Discover how Quadruple Solutions can transform your business today.</p>
        <div className={styles.services_card}>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <BagIcon fill="white" width={30} height={28} />
            </div>
            <h4>Web Developers</h4>
            <p className={styles.card_text}>
            Elevate Your Online Presence with Expert Web Development Services
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <OneIcon fill="white" width={32} height={30} />
            </div>
            <h4>Mobile Apps Developers</h4>
            <p className={styles.card_text}>
            Transform Your Ideas into Innovative Mobile Apps with Quadruple
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <HouseIcon fill="white" width={32} height={30} />
            </div>
            <h4>UI/UX Designer</h4>
            <p className={styles.card_text}>
            Unlock the Power of Blockchain with Custom Development Solutions
            </p>
            <Link href="#" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>Cloud Service Engineers</h4>
            <p className={styles.card_text}>
            Harness the Power of AWS for Scalable and Secure Cloud Solutions
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
