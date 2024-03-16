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
            <h4>Web <br></br> Development</h4>
            <p className={styles.card_text}>
            Elevate Your Online Presence with Expert Web Development Services
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <OneIcon fill="white" width={32} height={30} />
            </div>
            <h4>Mobile <br></br> Apps Developement</h4>
            <p className={styles.card_text}>
            Transform Your Ideas into Innovative Mobile Apps with Quadruple
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <HouseIcon fill="white" width={32} height={30} />
            </div>
            <h4>Blockchain <br></br> Developement</h4>
            <p className={styles.card_text}>
            Unlock the Power of Blockchain with Custom Development Solutions
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>AWS <br></br> Server Services</h4>
            <p className={styles.card_text}>
            Harness the Power of AWS for Scalable and Secure Cloud Solutions
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
