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
            <h4>Blockchain Development</h4>
            <p className={styles.card_text}>
            The groundbreaking potential of Blockchain technology is a core belief at Quadruple. 
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
            <h4>Web Development</h4>
            <p className={styles.card_text}>
            At Quadtruple Solutions, we craft web applications that seamlessly blend cutting-edge technology with creative innovation, ensuring simplicity, effectiveness, and captivation for your users.
            </p>
            <Link href="#" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <GraphIcon
              fill="#2C2929"
              width={48}
              height={44}
              className={styles.card_icon}
            />
            <h4>DevOps Services</h4>
            <p className={styles.card_text}>
            Quadruple offers comprehensive DevOps services to streamline and enhance your development and operations processes.  
            </p>
            <Link href="#" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <UserIcon
              fill="#2C2929"
              width={40}
              height={44}
              className={styles.card_icon}
            />
            <h4>Web Security</h4>
            <p className={styles.card_text}>
            Quadruple, a prominent provider of web security solutions, is dedicated to safeguarding internet environments against potential threats and vulnerabilities.
            </p>
            <Link href="#" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <HatIcon
              fill="#2C2929"
              width={77}
              height={44}
              className={styles.card_icon}
            />
            <h4>Cyber Security</h4>
            <p className={styles.card_text}>
            Elevate your digital defenses with Quadruple&apos;s cutting-edge cyber security solutions. We fortify your digital assets with robust cyber security measures, shielding you from evolving online threats.
            </p>
            <Link href="#" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <LocationIcon
              fill="#2C2929"
              width={30}
              height={44}
              className={styles.card_icon}
            />
            <h4>AWS Services</h4>
            <p className={styles.card_text}>
            Unlock the full potential of cloud computing with Quadruple&apos;s AWS services, delivering unparalleled scalability, reliability, and innovation.
            </p>
            <Link href="#" className={styles.card_link}>
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
